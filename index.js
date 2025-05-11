require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  res.json({name:'ritesh raghuwanshi'})
})

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`)
})
