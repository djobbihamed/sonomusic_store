const express = require("express")
const cors =require('cors')
const app = express()
const port = 5000
const {db,getAllInstruments,updateInstruments,addInstruments,deleteInstruments } = require("../mongoDB/index")

app.use(express.json())
app.use(cors());

app.get('api/instru',(req,res)=>{
    getAllInstruments().then((result)=>{
        res.status(200).send(result)
        }).catch((error)=>{
            res.status(500).send(error)
    })
})

app.put('api/instru/:id',(req,res)=>{
updateInstruments(req.params.id,req.body).then((result)=>{
    res.status(202).send(result)
}).catch((error)=>{
    res.status(500).send(error)
})
})

app.post('api/instru',(req,res)=>{
    addInstruments(req.body).then((result)=>{
        res.status(200).send(result)
    }).catch((error)=>{
        res.status(500).send(error)
    })
})

app.delete('api/instru/:id',(req,res)=>{
    deleteInstruments(req.params.id).then((result)=>{
        res.status(204).send(result)
    }).catch((error)=>{
        res.status(500).send(error)
    })
})

app.listen(port,()=>{
    console.log(`connected successfuly${port}`);
})