const express = require('express')

const app = express()

const PORT = 2333
const HOST = '0.0.0.0'

app.post('/', (req, res) => {
  console.log(req)

  res.status(200)
  res.send('It is ok')
})

app.listen(PORT, HOST)

console.log(`webhook serve is runing on http://${HOST}:${PORT}`)