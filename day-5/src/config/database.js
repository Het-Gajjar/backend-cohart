const mongoose=require("mongoose")

function connectTodb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>
    {
        console.log("db conneted succesfully")
    })
}
module.exports=connectTodb