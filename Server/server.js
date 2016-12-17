import http from 'http';

const IP_ADD = '127.0.0.1';
const PORT = 8080;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world\n');
}).listen(PORT, IP_ADD);

console.log('server is up and running at ' + IP_ADD + ": " + PORT);
