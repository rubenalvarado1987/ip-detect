const express = require('express')
const app = express()
const port = 8080
const IP = require('ip');

app.get('/', (req, res) => {
    const ipAddress = IP.address();
    res.send("IP:"+ipAddress)

    console.log(`IP`,IP);
    console.log(`ipAddress`,ipAddress);
})

app.get('/ip',function(req, response) {

    console.log("header",req.header)
    const ipAddress = req.header('x-forwarded-for') || req.socket.remoteAddress;
    res.send("ipAddress:"+ipAddress);
    
  });

app.listen(port, () => {
  console.log(`Example app listening on ports ${port}`)
  console.log(req.header('x-forwarded-for'))
})

