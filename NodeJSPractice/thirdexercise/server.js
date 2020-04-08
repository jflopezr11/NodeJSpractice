const http = require('http');

const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('in the middleware');
//     next(); // allows the 'app.use' below to run
// });

app.use('/', (req, res, next) => {
    console.log('This always runs!')
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('in another middleware');
    res.send('<h1>in the "add product" page!</h1>')
});

app.use('/', (req, res, next) => {
    console.log('in another middleware');
    res.send('<h1>Hello from Express!</h1>')
});

const server = http.createServer(app);

server.listen(3000);