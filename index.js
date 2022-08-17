const express = require("express")
const dotenv = require('dotenv')
const mongoose =require('mongoose');
const authRoute =require ('./routes/auth.js')
const hotelsRoute =require ('./routes/hotels.js')
const usersRoute =require ('./routes/users.js')
const roomsRoute =require ('./routes/rooms.js')

const app = express()
dotenv.config();


const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("db has been connected");
    }catch(error){
        throw error;
    }
}
app.use(express.json())

mongoose.connection.on("disconnected",()=>{
    console.log("mongo disconnected")
})
mongoose.connection.on("connected",()=>{
    console.log("mongo connected")
})

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500 ;
    const errorMessage = err.message || "Something went wrong" ;
    return res.status(errorStatus).json({
        success: false,
        status :errorStatus,
        message :errorMessage,
        stack :err.stack,
    })
})

app.listen(3000,()=>{
    connect()
    console.log("port has been connected");
})
