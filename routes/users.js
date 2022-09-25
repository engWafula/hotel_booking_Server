import express from "express"
// import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router()

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("Hello user you are authenticated")
})

//Delete HOTEL

// router.delete("/:id", deleteUser);

// //UPDATE HOTELS
// router.put("/:id", updateUser);

// //Get HOTEL
// router.get("/:id", getUser);

// //Get ALL HOTELS
// router.get("/", getUsers);

export default router