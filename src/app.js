const express = require('express')
const db=require("./connectionSetup/mongoDBSetup.js");
const student = require("./models/studentSchma.js")
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.post('/students',(req,res)=>{
    // console.log(req.body);
    const s1 = new student(req.body);
    s1.save().then(()=>{
        res.status(200).send(s1);
    })
    .catch((e)=>{
        res.status(400).send(e);
    });
});
app.get('/students', async (req,res)=>{
    try {
        const allStudents = await student.find();
        res.send(allStudents);
    } catch (error) {
        console.log(error)
    }
})
app.get('/students/:name', async (req,res)=>{
    try {
        const nm= req.params.name;
        // console.log(nm);
        const onm=nm.replace(/_/g, ' ');
        // console.log(onm);
        const s1 = await student.findOne({name:onm});
        console.log(s1);
        res.send(s1);
    } catch (error) {
        console.log(error)
    }
})
app.patch('/students/:name', async (req,res)=>{
    try {
        const nm= req.params.name;
        // console.log(nm);
        const onm=nm.replace(/_/g, ' ');
        console.log(onm);
        const s1 = await student.updateOne({name:onm}, 
            req.body);
        console.log(s1);
        res.send(s1);
    } catch (error) {
        console.log(error)
    }
});
app.listen(port,()=>{
    console.log("Server connection setup Successfully...")
});

