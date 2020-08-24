const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.static("../build"));

let path=process.env.RECORDS_VARIABLE||"scores.json"
const records = JSON.parse(fs.readFileSync(path));

app.get("/api/v1/records", (req,res) => {
    res.send(records);
});

app.post("/api/v1/records", (req,res) => {
    req.body.id = records.length === 0 ? 1 : Math.max(...records.map(record => record.id)) + 1;
    records.push(req.body);
    let history = JSON.parse(fs.readFileSync(path));
    history.push(req.body);
    fs.writeFileSync(path, JSON.stringify(history));
    res.send(records);
});

module.exports =app
