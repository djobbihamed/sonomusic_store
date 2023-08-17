const mongoose  = require("mongoose")
const mongoUri = "mongodb://127.0.0.1:27017/musicInstru";
const {instruments} = require("../mongoDB/Instruments")
const db = mongoose.connection
mongoose.connect(mongoUri).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));


const getAllInstruments = () => {
    return instruments.find()
}

const updateInstruments = (id,data) => {
    return instruments.findByIdAndUpdate({_id:id},data,{new:true})
}

const addInstruments = (obj) =>{
    return instruments.create(obj)
}

const deleteInstruments = (id) => {
return instruments.findByIdAndDlete({_id:id})
}

module.exports = {
    db,
    getAllInstruments,
    updateInstruments,
    addInstruments,
    deleteInstruments
}

