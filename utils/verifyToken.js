import jwt from "jsonwebtoken";
import { createErrors } from "../utils/errors.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createErrors(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT_SCRETE, (err, user) => {
    if (err) return next(createErrors(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};


export const verifyUser = (req,res,next)=>{
      verifyToken(req,res,next,()=>{
          if(req.user.id===req.params.id || req.user.isAdmin){
              next()
          }else{
              next(createErrors(403,"You are not allowed to perform this action"))
          }
      })
  }


  export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if( req.user.isAdmin){
            next()
        }else{
            next(createErrors(403,"You are not allowed to perform this action"))
        }
    })
}

