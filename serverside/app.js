const app=require("./tic-tac-toe-server")
console.log(process.env.NODE_ENV)
app.listen(process.env.PORT||4000);