
import { getTest } from '../controllers/test.contoller';
import { Application } from 'express';

export const testRoutes = (app: Application, io: SocketIO.Server) => {
  console.log("Initializing test routes");
  app.route('/api/v1/test')
    .get(getTest);
}

//test commit
