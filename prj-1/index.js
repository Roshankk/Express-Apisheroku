const express = require('express')
const app =express();
const port=process.env.PORT||5050
const student =require('./student/getDetails.json')

app.post('/student/getDetails',(req,res)=>{
    res.json(student)
})


app.get('/',(req,res) =>{
    res.send("api is running")

})

app.listen(port, ()=> console.log("server is running"));