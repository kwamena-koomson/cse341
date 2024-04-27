const express = require('express')
const app = express()
const port = 4000


app.use('/', require('./routes'));


app.listen(port, () => {
  console.log(`Web Server listening on port ${port}`)
}) 

