const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'errorpage.html'))
});

app.listen(3000);

/*
app.use('/', (req, res, next) => {
    // console.log('in another middleware');
    res.send('<h1>Hello from Express!</h1>')
});

const server = http.createServer(app);
*/



// app.use((req, res, next) => {
//     console.log('in the middleware');
//     next(); // allows the 'app.use' below to run
// });

/*
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
*/