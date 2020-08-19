const express = require("express")
const app = express()
app.use(express.json())
app.use(express.static(".//build"))
const records=[];

app.get("/api/v1/records",(req,res)=>{
    res.send(records)
})

app.post("/api/v1/records",(req,res)=>{
    records.push(req.body);
    res.send(req.body);
})

app.listen(4000)