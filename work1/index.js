
const http = require('http')

const handles = require('./handle')

const server = http.createServer(handles.serverHandle);
server.listen(8080)


  
//http://localhost:8080/hello?name=alex