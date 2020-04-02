const fs = require('fs');

const requestHandler = ((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head');
        res.write('<h1>HELLO ERRBODY!!</h1>')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name ="user"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<ul><li> User 1 </li></ul>');
        res.write('<ul><li> User 2 </li></ul>');
        res.write('<ul><li> User 3 </li></ul>');
        res.write('<ul><li> User 4 </li></ul>');
        res.write('<ul><li> User 5 </li></ul>');
        res.write('<ul><li> User 6 </li></ul>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const user = parsedBody.split('=')[1];
            fs.writeFile('user.txt', user, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
});

module.exports = requestHandler;