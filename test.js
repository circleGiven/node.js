const http = require('http');

http.createServer((requset, response) => {
   response.writeHead(200, {'content-Type': 'text/plain'});
   response.end('END\n');
}).listen(8800, () => {
    console.log('server listen started', new Date());
});

console.log('server run', new Date());