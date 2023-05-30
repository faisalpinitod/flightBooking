const express=require('express')
const {BookModel}=require("../model/booking.model")


const bookRouter=express.Router()

bookRouter.post("/booking",async(req,res)=>{
    const data=req.body
    try{
       const book=new BookModel(data)
       await book.save()
       res.status(201).send("Book flight Successfull")
    }catch(err){
        res.send({"Msg":"Something went wrong"})
        console.log(err)
    }
})

module.exports={
    bookRouter
}