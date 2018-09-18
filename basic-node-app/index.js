var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hi everybody!');
});
console.log("listening on 8080")
server.listen(8080);
