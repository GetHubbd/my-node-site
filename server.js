const express = require('express')
 
const app = express()
 
const PORT = 3000
 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

/*
app.get('/', (req, res) => {
    res.send("<h1>This is not alex's website</h1>")
})

app.get('/', (req, res) => {
    res.send("<h1>Alex is forbidden fron using this website</h1>")
})

app.get('/', (req, res) => {
    res.send("<h1>If Alex tries to enter my website i will tell mr caufield to have him thrown from the classroom</h1>")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
*/

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html')
})