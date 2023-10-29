const mongoose =require('mongoose')
const url = 'mongodb+srv://sebastian:sasaram@cluster0.qafgefz.mongodb.net/Students-Data?retryWrites=true&w=majority'
mongoose.connect(url)
.then(()=>{
console.log("Database connected successfully...");
})
.catch((e)=>{
    console.log("something went wrong while connecting with Database!");
    console.log(e);
});
