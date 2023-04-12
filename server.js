const express = require('express')
const app = express()
const port = 8080
const IP = require('ip');

app.get('/', (req, res) => {
    const ipAddress = IP.address();
    res.send(ipAddress)

    console.log(`IP`,IP);
    console.log(`ipAddress`,ipAddress);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
