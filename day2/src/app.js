const e = require('express');
const express=require('express')

const app=express();
let notes=[];
app.use(express.json())
app.post('/note',(req,res)=>
{
    console.log(req.body);
    res.send("note added sucessfully");
    notes.push(req.body);
})
app.get('/note',(req,res)=>
{
    res.send(notes);
})
app.patch('/note/:index',(req,res)=>
{
    console.log(req.params);
    notes[req.params.index].title=req.body.title;
})
app.delete('/note/:index',(req,res)=>
{
    delete notes[req.params.index];
})

module.exports=app;