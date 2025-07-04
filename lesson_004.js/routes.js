const fs = require("fs");

const routes = (req, res) => {
  const route = req.url.split("/")[1];

  // Render form
  if (!route && req.method === "GET") {
    const template = `
        <form method="post" action="/file">
            <input type="text" name="userInput" />
            <button type="submit">submit</button>
        </form>
      `;
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": Buffer.byteLength(template),
    });
    res.end(template);
    return;
  }

  // Handle form submission
  if (route === "file" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => body.push(chunk));
    req.on("end", () => {
      const data = Buffer.concat(body).toString();

      // Append or create
      const write = fs.existsSync("inputs.txt") ? fs.appendFile : fs.writeFile;

      write("inputs.txt", data + "\n", (error) => {
        if (error) {
          console.error("❌ Write failed:", error);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Failed to save data");
        } else {
          console.log("✅ Data written:", data);
          res.writeHead(302, { Location: "/redirect-url" });
          res.end();
        }
      });
    });
    return;
  }

  // Show confirmation + saved data
  if (route === "redirect-url" && req.method === "GET") {
    fs.readFile("inputs.txt", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading saved data.");
      } else {
        const message = `<h1>✅ Your input was saved!</h1><pre>${data.toString()}</pre>`;
        res.writeHead(200, {
          "Content-Type": "text/html",
          "Content-Length": Buffer.byteLength(message),
        });
        res.end(message);
      }
    });
    return;
  }

  // 404 fallback
  res.writeHead(404, {
    "Content-Type": "text/plain",
  });
  res.end("404 Not Found");
};

module.exports = {
  routes,
};

// module.exports.routes = routes;
