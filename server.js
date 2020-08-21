const express = require('express')
const cors = require('cors')
const {loadNotes} = require('./notes')
const path = require('path')
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, './client/build/')))

app.get('/listall', (req, res)=>{
    // console.log('this route was hit')
    const allNotes = loadNotes()
    res.status(200).send({notes: allNotes})
})

app.post("/add", (req, res) => {
    try {
      addNote(req.body.reminder);
      res.status(200).send({ message: "Successfully added a note" });
    } catch (error) {
      res.status(500).send({ message: error });
    }
  });

app.listen(3005, ()=>{
console.log('listening to port 3005');    
})