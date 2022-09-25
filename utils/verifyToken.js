import jwt from "jsonwebtoken";
import { createErrors } from "../utils/errors.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    console.log("NO TOKEN")
    return next(createErrors(401, "You are not authorized"));
  }

 jwt.verify(token, process.env.JWT_SCRETE,(err,user=>{
        if(err){

            console.log("erroror")
            return next(createErrors(403, "Invalid access token"));

        }
       req.user = user

       next()
    }));

};