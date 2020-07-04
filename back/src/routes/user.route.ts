import { Application } from 'express';
import { addUser,login} from '../controllers/user.controller';



export const userRoutes = (app: Application, io: SocketIO.Server) => {
    
    app.route('/api/v1/user')
        .post(addUser);
    app.route('/api/v1/user/login')
        .get(login);

  
}
