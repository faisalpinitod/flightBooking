const express=require('express')
const { connection } = require('./config/db')
const { userRouter } = require('./Routes/user.router')
const { flightRouter } = require('./Routes/flight.router')
const { bookRouter } = require('./Routes/booking.router')
const { dashRouter } = require('./Routes/dashbord.router')

const app=express()

app.use(express.json())

app.get("/",async(req,res)=>{
    try{
        res.send("Welcome")
    }catch(err){
        console.log({"MSG":"Something went wrong"})
    }
})

app.use("/user",userRouter)
app.use("/flight",flightRouter)
app.use("/book",bookRouter)
app.use("/booking",dashRouter)


app.listen(8080,async()=>{
    try{
        await connection
        console.log("The DB is connected")
    }
    catch(err){
        console.log({"MSG":"Something went wrong"})
    }

    console.log("The server is running at 8080")
})