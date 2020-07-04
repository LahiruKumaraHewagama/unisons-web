import morgan from "morgan";
import bodyParser from "body-parser";

import {
  ErrorRequestHandler,
  NextFunction,
  Response,
  Request,
  Application,
} from "express";
import express from "express";
import http, { Server } from "http";
import socketDotIO from "socket.io";
import cors from "cors";
import MySQL from "./db";
import { testRoutes } from "../routes/test.route";
import { userRoutes } from "../routes/user.route";
import { adminRoutes } from "../routes/admin.route";

/**
 * @description - initializing application configurations and middle layers
 */
const initializedAppConfigs = (app: Application) => {
  // in express we can register middlewares using app.use() function
  console.log("Initializing application configs");
  app.use(morgan("dev"));

  // setup the body-parser, setting max file size for response transfer
  app.use(bodyParser.json({ limit: "5mb" }));
  app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }));

  app.use(cors());

  // setup static resources
  // app.use('/static', express.default('public'));

  // error handler, send stacktrace only during development
  app.use(
    (
      err: ErrorRequestHandler,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      // eslint-disable-line no-unused-vars
      console.log(err);

      const status = err.status ? err.status : 400;
      return res.status(status).json({
        message: err.message,
        // TODO: enable this after adding the environments
        // stack: config.env === 'development' || config.env.env === "dev" ? err.stack : {}
        stack: err.stack,
      });
    }
  );

  const server = http.createServer(app);
  const io = socketDotIO(server);
  return { server, io };
};

/**
 * @desc - setup db connection and models
 */
const initDbConfigs = () => {
  new MySQL();
};

/**
 * @desc - initialize the all sever routes (REST end points);
 */
const initializeServerRoutes = (app: Application, io: socketDotIO.Server) => {
  testRoutes(app, io);
  userRoutes(app, io);
  adminRoutes(app, io);
};

const setupSocketio = (io: socketDotIO.Server) => {
  io.on("connection", (socket: socketDotIO.Socket) => {
    console.log("User connected");
    socket.on("notification", function (msg) {
      console.log("message from client", msg);
      socket.emit("notification", "Hi I'm Server");
    });
  });
};

/**
 * @desc - initialize the application
 */

export const init = (): { server: Application; io: socketDotIO.Server } => {
  const app: Application = express();
  const { io, server } = initializedAppConfigs(app);
  initDbConfigs();
  setupSocketio(io);
  initializeServerRoutes(app, io);

  return { server, io };
};
