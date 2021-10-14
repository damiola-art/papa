const express = require('express')
const app = express()
const port = 3000


const bodyParser = require ("body-parser")



const index = express()

index.get('/', (req, res) => {
  res.sendFile(__dirname + "/page.html")
})

app.listen(3000, () => {
  console.log("Server app listening at 3000")
})



