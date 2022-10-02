import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import cors from "cors"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"


const app = express()
dotenv.config()

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected")
    } catch (error) {
        throw new Error(error)
         
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected")
})

mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected")
})


//middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)
app.use("/api/users",usersRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.statusCode || 500
    const errorMessage = err.message || "Something went wrong"
   return res.status(errorStatus).json({
    message:errorMessage,
    success:false,
    status:errorStatus,
    stack:err.stack
        
   })
})

app.listen(7000, () => {
 connect()
  console.log("Server is running on port 7000")
})