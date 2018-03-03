const express	= require('express')
const http = require('http')
const path = require('path')

const port = 3000

const app = express()

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/index.html'))
})

app.listen(port, () => {
  console.log('Server started on port ' + port)
})
