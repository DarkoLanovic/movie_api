// Import Node.js core module (assigning an instance of the 'HTTP, FS, URL module' to created variable 'http, fs, usr')
const http = require('http'),
      fs = require('fs'),
      url = require('url');

// Creating SERVER
http.createServer((request, response) => {
  let addr = request.url,
    // parse the "url"
    q = url.parse(addr,true),
    filePath = '';

  // parse the "url" to determine if the URL contains the word “documentation”
  if (q.pathname.includes('documentation')) {
        filePath = (__dirname + '/documentation.html');
    } else {
        // If "documentation" word wasn't found in URL, return to "index.html"
        filePath = 'index.html';
    }  

  fs.appendFile('log.txt', 'URL: ' + addr + '\nTimestamp: ' + new Date() + '\n\n', (err) => {
      if (err) {
          console.log(err);
      } else {
          console.log('Added to log.txt');
      }
  });

  fs.readFile(filePath,(err, data) => {
      if (err) {
          throw err;
      }
      response.writeHead(200, {'Content-Type': 'text/html' });
      response.write(data);
      response.end();
  });   

}).listen(8080); // listen for any incoming request

console.log('My test server is running on Port 8080.');

