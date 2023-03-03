const express=require('express')
const PORT=3000
const db=require('../server/orm/index')
const app=express()
const cors = require('cors');
const player=require('./orm/Routes/playerRoute.js')
const bodyParser=require('body-parser')

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())
app.use('/player',player);

app.listen(PORT,()=>{
    console.log(`server working on ${PORT}` );
})


module.exports=app;