const http = require('http');

const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    // console.log('also another middleware!');
    res.send('<h2>Hello, USERS!</h2>');
});

app.use('/', (req, res, next) => {
    // console.log('Middleware!');
    res.send("<h1>HELLO, WORLD!</h1>");
});



const server = http.createServer(app);

server.listen(3000);