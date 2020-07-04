
import * as Server from './express';
import { Application, ErrorRequestHandler } from 'express';

const init = (callback: Function) => {
    const {server, io} = Server.init();
    if (callback) callback(server);
}

export const start = () => {
   init((app: Application): void => {
       app.listen(process.env.PORT, (err: ErrorRequestHandler) => {
           if (err) console.log(err);
           console.log(`Application is running on localhost port: ${process.env.PORT}`);
       })
   })
}
