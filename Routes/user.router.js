const express=require('express')
const {UserModel}=require('../model/user.model')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')


const userRouter=express.Router()


userRouter.post("/register",async(req,res)=>{
    const {name,email,password}=req.body

    try{
        const userExist=await UserModel.findOne({email})
        if(userExist){
            res.send("User already Exist")
        }else{
            bcrypt.hash(password,5,async(req,hash)=>{
                const user=new UserModel({name,email,password:hash})
                await user.save()
                console.log(user)
                res.status(201).send({'MSG':"User Successfully Registerd"})
            })
        }
    }catch(err){
        console.log({"MSG":"Something went wrong"})
        console.log(err)
    }
})


userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.findOne({email})
        if(!user){
            res.send("Invalid User")
        }
        const hashpassword=user?.password
        bcrypt.compare(password,hashpassword,(req,result)=>{
            if(result){
                const token=jwt.sign({userID:user._id},"MASAI")
                res.status(201).send({"MSG":"Login Successful",token})
            }else{
                res.send("Wrong crediantials")
            }
        })
    }catch(err){
        console.log({"MSG":"Something went wrong"})
        console.log(err)
    }
})

module.exports={
    userRouter
}