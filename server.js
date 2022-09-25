const fs = require('fs')
const http = require('http')
const url = require("url")

const port = 3002

const server = http.createServer((req, res) => {

  const q = url.parse(req.url, true)

  if (q.pathname === "/") {
    fs.readFile("index.html", "utf8", (err, data) => {
      res.writeHead(200,{"contentType":"text/html"})
      res.write(data)
      res.end()
    })
  }else if (q.pathname === "/formSubmit") {
    res.writeHead(200, { "contentType": "text/html" });
    console.log(q.query)
    res.write(`<h2>${q.query.user_name} <br> ${q.query.email} <br> ${q.query.phone} <br> ${q.query.message} </h2>`);
    res.end()
  }
})

server.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
