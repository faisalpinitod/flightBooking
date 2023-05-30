const mongoose=require("mongoose")

const flightScheema=mongoose.Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: Date,
    arrivalTime: Date,
    seats: Number,
    price: Number
  },{
    "versionKey":false
})

const FlightModel=mongoose.model("flight",flightScheema)

module.exports={
    FlightModel
}