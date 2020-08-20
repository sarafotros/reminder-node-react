const express = require('express')
const cors = require('cors')
const {loadNotes} = require('./notes')
const path = require('path')
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, './public')))

app.get('/listall', (req, res)=>{
    // console.log('this route was hit')
    const allNotes = loadNotes()
    res.status(200).send({notes: allNotes})
})

app.post('/add', ( req, res)=>{
    console.log(req.body.reminder);
    res.status(200).send({message:'successfully added'})
})

app.listen(3005, ()=>{
console.log('listening to port 3005');    
})