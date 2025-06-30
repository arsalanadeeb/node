// lesson 3
// Mini Project render a a basic from on base url and collect the user message.
// store the user message in local file

const http = require('http');
const fs = require('fs');

const requestListener  = (req,res) => {
   // console.log(req.url);
   if(req.url === '/'){
      res.setHeader('Content-Type','text/html');
      // HTML template SSR
      res.write(`
         <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <title>Message Form</title>
            </head>
            <body>
            <h2>Send a Message</h2>
            <form action="/message" method="POST">
               <label for="message">Your Message:</label><br>
               <textarea id="message" name="message" rows="5" cols="40" required></textarea><br><br>
               <button type="submit">Submit</button>
            </form>
            </body>
            </html>
`);

      res.end();
      return;
   }
   if(req.url === '/message'){
      //understand event driven arch of node 
      // Understand how request is a stream and how data arrives in chunk
      const body = [];
      req.on('data',(chunk)=>{ //request is a stream and on is a event there are different events happen based on lifecyle
         body.push(chunk);
      });
      req.on('end',()=>{
         const parseBody = Buffer.concat(body).toString();
         fs.writeFileSync('messages.txt',parseBody);
      });
      res.write(`<h1>Thanks for submitting the message</h1>`);
      res.end();
      return
   }
  
};

http.createServer(requestListener).listen(5000);
