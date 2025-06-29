// lesson 1 
//create first node server and print request object.

// require is a function available in Node Global which include code from core/external modules into your file/module.
const http = require('http');

// Node JS is a single threaded event based system.
// here createServer creates an event which will keep listening on a port 5000 and executes listener function when ever a request arrives.
// process.exit is similar to ctlr+c which terminates the ongoing process.
// console in another globally available ref which will print things on terminal aka console.

const requestListener  = (req,res) => {
    console.log(req);
    process.exit();
};

http.createServer(requestListener).listen(5000);
