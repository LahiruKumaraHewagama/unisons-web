import { Application } from "express";
import { addVideo } from "../controllers/admin.controller";
import { getVideos } from "../controllers/admin.controller";

export const adminRoutes = (app: Application, io: SocketIO.Server) => {
  app.route("/api/v1/video").post(addVideo)
    .get(getVideos);

};
