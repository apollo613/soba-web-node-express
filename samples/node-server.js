var http = require('http');

var responder = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}

var server = http.createServer(responder);
server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');