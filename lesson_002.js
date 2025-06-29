// lesson 2
//Writing response.

const http = require('http');

const requestListener  = (req,res) => {
   res.setHeader('Content-Type','text/html');
   res.write(
    '<html><body><h1>Hey Node</h1></body></html>');
   res.end();
};

http.createServer(requestListener).listen(5000);
