var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'video/mp4'});
  var readString = fs.createReadStream("crazycat.mp4");
  readString.pipe(response);
}).listen(3000);
