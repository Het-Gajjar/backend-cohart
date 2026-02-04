const app=require('./src/app')
const mongoose=require('mongoose')
const nodeModel=require('./src/models/note.model')
const connectTodb=require('./src/config/database')
connectTodb();


app.post('/note',async(req,res)=>
{
   const {title,description}=req.body;
  const note=await nodeModel.create({
    title,description
  })
  res.status(201).json({
    message:"note created",
    note
  })
})
app.get('/note',async (req,res)=>
{
    const note= await nodeModel.find();
    res.status(200).json({
        message:"all notes",
        note
    })
})
app.listen(3000,()=>
{
    console.log("server started successfully")
})