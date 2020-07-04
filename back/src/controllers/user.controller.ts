import { Application, Request, Response } from "express";
import Mysql from '../config/db';

export const addUser = (req: Request, res: Response) => {

    // Example query that you can execute to get all the users from database
   
    const add_user_query = "insert into users(`email`, `name`,`country`,`pwd`) values (?,?,?,?)";
    Mysql.getPool().query(add_user_query, [req.body.email, req.body.name,req.body.country, req.body.pwd], (err: any, results: any) => {
       if (err) {
          console.log("Error", err);
          res.status(500)
             .json({ "error": err });
       } else {
          console.log("Result: ", results);
          res.json(results);
       }
    }
    );
 }

 
export const login = (req: Request, res: Response) => {
   const get_user_query = "select * from users where email=?";
   // Example query that you can execute to get all the users from database
   Mysql.getPool().query(get_user_query, [req.query.email], (err: any, results: any) => {
      if (err) {
         console.log("Error", err);
         res.status(500)
            .json({ "error": err });
      } else {
         console.log("Result: ", results);
         res.json(results);
      }
   });
}

export const addLike = (req: Request, res: Response) => {

   // Example query that you can execute to get all the users from database

   const add_likes_query = "INSERT INTO likes (`email`, `video_id`) values (?,?)";
   Mysql.getPool().query(add_likes_query, [req.body.email, req.body.video_id], (err: any, results: any) => {
      if (err) {
         console.log("Error", err);
         res.status(500)
            .json({ "error": err });
      } else {
         console.log("Result: ", results);
         // console.log("ajhfkjaofko::::::::"+req.body.email+"asjfnka"+ req.body.video_id)
         res.json(results);
      }
   }
   );
}


export const likeVideo = (req: Request, res: Response) => {
   const get_user_query = "select distinct video_id from likes where email=?";
   // Example query that you can execute to get all the users from database
   Mysql.getPool().query(get_user_query, [req.query.email], (err: any, results: any) => {
      if (err) {
         console.log("Error", err);
         res.status(500)
            .json({ "error": err });
      } else {
         console.log("Result: ", results);
         res.json(results);
      }
   });
}
