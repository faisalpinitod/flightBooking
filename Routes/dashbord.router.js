const express=require('express')
const {BookModel}=require("../model/booking.model")



const dashRouter=express.Router()

dashRouter.get("/dashbord",async(req,res)=>{
    const data=req.query
    try{
       const book=await BookModel.find(data)
       res.status(201).send(book)
    }catch(err){
        res.send({"Msg":"Something went wrong"})
        console.log(err)
    }
})

module.exports={
    dashRouter
}