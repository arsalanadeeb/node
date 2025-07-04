// assignment
//[✅ ]  Create a node server
//[✅ ]  Create 2 routes base shows form and on submit form redirect to new route
//[✅ ]  with proper rerouting url and status code
//[✅ ]  show all the file content there
//[✅]  separate routing logic in separate file

const http = require("http");
const { routes } = require("./routes");
http.createServer(routes).listen(3000, () => {
  console.log("✅ Listening on port 3000");
});