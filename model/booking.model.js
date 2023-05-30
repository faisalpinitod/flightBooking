const mongoose=require("mongoose")

const bookScheema=mongoose.Schema({
    user : { type: String, ref: 'user' },
    flight : { type: String, ref: 'flight' }
}
,{
    "versionKey":false
})

const BookModel=mongoose.model("book",bookScheema)

module.exports={
    BookModel
}