import express from "express"
 import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("Hello user you are authenticated")
})


router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("Hello  use can perform this action")
})


router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("Hello  use can perform this action since you are an admin")
})



router.delete("/:id",verifyUser, deleteUser);

router.put("/:id",verifyUser, updateUser);

router.get("/:id",verifyUser, getUser);

router.get("/",verifyAdmin, getUsers);

export default router