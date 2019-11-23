const express = require('express')
const app = express()

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kingson:1234@practice-lmr7s.mongodb.net/sample_supplies?retryWrites=true&w=majority',
                 {useNewUrlParser: true, useUnifiedTopology: true})
                 .then(()=>{console.log('Connected to Mongodb...')})
                 .catch((err)=>{console.log(err)});

var Supply = mongoose.model('data',new mongoose.Schema({}),'sales');

app.get('/',(req,res)=>{
    async function getContent() {
        const rowshow = 10;
        const pagenum = req.query.page;
        console.log(pagenum);
        const result = await Supply.find({saleDate: {$gte : new Date(2016,1,1), $lte : new Date(2016,3,31)}})
                                .limit(rowshow)
                                .skip(pagenum*rowshow);
        var all = [];
        result.forEach(r=>all.push(r['_doc']))
        res.send(all)
    }           
    getContent();
})


const port = 3000
app.listen(port, ()=>console.log(`Listening to host ${port}....`))
