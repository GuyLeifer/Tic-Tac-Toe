const express = require("express")
const app = express()
app.use(express.json())
// app.use(express.static(".//build"))
const records=[];

app.get("/api/v1/records",(req,res)=>{
    res.send(records)
})

app.post("/api/v1/records",(req,res)=>{
    req.body.id=records.length===0?1:Math.max(...records.map(record=>record.id))+1
    records.push(req.body);
    res.send(records);
})

app.listen(4000)