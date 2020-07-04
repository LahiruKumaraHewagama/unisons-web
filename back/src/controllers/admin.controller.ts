import { Application, Request, Response } from "express";
import Mysql from '../config/db';
import { FieldInfo, MysqlError } from "mysql";

 export const addVideo = (req: Request, res: Response) => {
   // Example query that you can execute to get all the videos from database
   const add_video_query = "insert into videos(`title`,`upload_date`,`url`) values (?,?,?)";
    Mysql.getPool().query(add_video_query, [ req.body.title,req.body.upload_date,req.body.url], (err: any, results: any) => {
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
 

export const getVideos= (req: Request, res: Response) => {
   const get_video_query = "select v.title,v.upload_date,v.url,count(v.video_id) as likes from likes l left outer join videos v on l.video_id=v.video_id group by v.video_id order by v.video_id desc";

   Mysql.getPool().query(get_video_query, (err:any, results: any) => {
       if(err){
           console.log("Error", err);
           res.status(500)
              .json({ "error": err });
       }else{
           console.log("Result: ", results);
           res.json(results);
       }
   });

}
