const express = require('express')
const app = express()
const port = 80
const IP = require('ip');


app.get('/hola', (req, res) => {
    res.send("HOLA")
    console.log(`HOLA`);
});

app.get('/address', (req, res) => {
    const ipAddress = IP.address();
    res.send("IP:"+ipAddress)

    console.log(`IP`,IP);
    console.log(`ipAddress`,ipAddress);
});

app.get('/ip',function(req, response) {

    console.log("IP...");
    const ipAddress = req.header('x-forwarded-for') || req.socket.remoteAddress;
    res.send("ipAddress:"+ipAddress);
    
});

app.listen(port, () => {
  console.log(`Example app listening on ports ${port}`)
  //console.log(req.header('x-forwarded-for'))
})

