const  mongoose = require("mongoose");


const instrumentSchema = new mongoose.Schema({
    name:String,
    price:Number,
    imageUrl:String,
    categories:{
        type: String,
        enum: ["guitars,", "pianos,", " drums"],
        default: "drums"
      }



})

const instruments = mongoose.model("Instruments",instrumentSchema)

module.exports.instruments = instruments


