const express=require('express');
const app=express();

let notes=[]
app.use(express.json())
app.post("/addnote",(req,res)=>
{{
    console.log(req.body);
    res.send("note created");
    notes.push(req.body);
}}
)
app.get('/',(req,res)=>
{
    res.send(notes);
})

app.listen(3000)