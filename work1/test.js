// Import a module
const http = require('http')
const url = require('url')
const qs = require('querystring')


const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'         <p>Hello World !</p>' +
'    </body>' +
'</html>'

// curl localhost:8080 or go to http://localhost:8080
const serverHandle = function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)
    // Retrieve and print the current path
    //const path = url.parse(req.url).pathname;
    //  console.log(path);
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.write(content);

    if (path === '/hello' && 'name' in params) {
      res.write('Hello ' + params['name'])
    } else {
      res.write('Hello anonymous')
    }

    res.end();
  }
  
  const server = http.createServer(serverHandle);
  server.listen(8080)


  
//http://localhost:8080/hello?name=alex