const mongoose=require("mongoose")

const userScheema=mongoose.Schema({
    name: String,
    email: String,
    password: String
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userScheema)

module.exports={
    UserModel
}