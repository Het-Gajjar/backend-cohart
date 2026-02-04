
const mongoose=require('mongoose');

function connectTodb()
{
    mongoose.connect('mongodb+srv://hetg69774_db_user:S6xFKiOEeJqQ4dy8@cluster0.psxgxtk.mongodb.net/day-3')
    .then(()=>
    {
        console.log("db started succesfully");
        
    })
}
module.exports = connectTodb