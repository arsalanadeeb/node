// lesson 1 
//create first node server and print request object.
const http = require('http');

const requestListener  = (req,res) => {
    console.log(req);
    process.exit();
};

http.createServer(requestListener).listen(5000);
