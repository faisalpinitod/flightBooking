const express=require('express')
const {FlightModel}=require("../model/flight.model")


const flightRouter=express.Router()



// ----------------------- Post flight-------------------

flightRouter.post("/flights",async(req,res)=>{
    const data=req.body
    try{
        const flight=new FlightModel(data)
        await flight.save()
        console.log(flight)
        res.status(201).send({'MSG':"Flight Successfully Registerd"})  
    }catch(err){
        console.log({"MSG":"Something went wrong"})
        console.log(err)
    }
})


// ------------------------Get flight with ID--------------------------


flightRouter.get("/flights/:id",async(req,res)=>{
    const id=req.params.id
    try{
        const flight=await FlightModel.findOne({_id:id})
        console.log(flight)
        res.status(200).send(flight)  
    }catch(err){
        console.log({"MSG":"Something went wrong"})
        console.log(err)
    }
})


// -------------------------Get flight--------------------------



flightRouter.get("/flights",async(req,res)=>{
    const query=req.query
    try{
        const flight=await FlightModel.find(query)
        // await flight.save()
        console.log(flight)
        res.status(200).send(flight)  
    }catch(err){
        console.log({"MSG":"Something went wrong"})
        console.log(err)
    }
})



// -------------PUT/PATCH flight-----------------------


flightRouter.patch("/flights/:id",async(req,res)=>{
    const id=req.params.id
    const data=req.body
    try{
        const flight=await FlightModel.findByIdAndUpdate({_id:id},data)
        // await flight.save()
        console.log(flight)
        res.send({"MSG":"Flight Updated Successfully"})  
    }catch(err){
        console.log({"MSG":"Something went wrong"})
        console.log(err)
    }
})




// ---------------------------flight DELETE---------------------------



flightRouter.delete("/flights/:id",async(req,res)=>{
    const id=req.params.id
    const data=req.body
    try{
        const flight=await FlightModel.findByIdAndDelete({_id:id})
        // await flight.save()
        console.log(flight)
        res.status(202).send({"MSG":"Flight Deleted Successfully"})  
    }catch(err){
        console.log({"MSG":"Something went wrong"})
        console.log(err)
    }
})

module.exports={
    flightRouter
}