const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://Faisalpinitod:faisal@cluster0.y2f7t.mongodb.net/bookflight?retryWrites=true&w=majority")

module.exports={
    connection
}