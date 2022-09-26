import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

router.post("/:hotelid",verifyAdmin, createRoom)

//Delete room

router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);

//UPDATE room
router.put("/:id",verifyAdmin, updateRoom);

//Get room
router.get("/:id", getRoom);

//Get ALL rooms
router.get("/", getRooms);

export default router