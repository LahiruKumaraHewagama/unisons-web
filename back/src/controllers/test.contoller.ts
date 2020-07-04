import { Application, Request, Response } from "express";
import Mysql from '../config/db';
import { FieldInfo, MysqlError } from "mysql";

 export const getTest = (req: Request, res: Response) => {
   // Example query that you can execute to get all the users from database
   Mysql.getPool().query("select * from test", (err: MysqlError, results: any) => {
      if (err) {
         console.log("Error", err);
         res.status(500)
            .json({"error": err});
      } else {
         console.log("Result: ", results);
         res.json(results);
      }
   });
 }
