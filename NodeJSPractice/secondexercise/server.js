const http = require('http');

//function that will execute for every incoming request. 
// function rqlistener(req, res) {

// }

// http.createServer(rqlistener);

// could also write an anonymous function like:
/*
http.createServer(function(req, res){

});
*/
//Or we can use the ES6 arrow functions still anonymous like pervious. 

const server = http.createServer((req, res) =>{
    console.log(req);
    process.exit();
}); 

server.listen(3000);