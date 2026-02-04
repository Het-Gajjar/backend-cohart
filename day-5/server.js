require('dotenv').config();
const app=require('./src/app')
const connectTodb=require('./src/config/database')
const nodeModel=require('./src/models/note.model')



connectTodb();


app.post('/api/note',async(req,res)=>
{
   const {title,description}=req.body;
  const note= await  nodeModel.create({
        title,description
    })
    res.status(201).json({
        message:"note created succefully",
        note
    })
})
app.get('/api/note',async(req,res)=>
{
    const notes=await nodeModel.find();
    res.status(200).json({
        message:"all notes",
        notes
    })
})
app.patch('/api/note/:id',async(req,res)=>
{
    const id=req.params.id;
    const {title,description}=req.body;

  const note= await nodeModel.findByIdAndUpdate(id,{
      title,  description
    })

    res.status(200).json({
        message:"note updated succesfully",
        note
    })

})
app.delete('/api/note/:id',async (req,res)=>
{
    const id=req.params.id;

    const note=await nodeModel.findByIdAndDelete(id);

    res.status(200).json({
        message:"note deleted succefully",note
    })

})
app.listen(3000,()=>
{
    console.log("server is ruuning");
})