const url = require('url')
const qs = require('querystring')

module.exports = {
    serverHandle: function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
    
        
        res.writeHead(200, {'Content-Type': 'text/plain'});
    
        if (path === '/'){
            res.write("Hello, if you want to see your name on the screen you must ad (/hello?name=YOUR_NAME) to the url");
        }else if (path === '/hello' && 'name' in params) {
            if( params['name'] === 'alex'){
                res.write('Hello ' + params['name'])
                res.write('\nyou are in school at ECE in your 4th year')
            }else{
                res.write('Hello ' + params['name'])
            }
        }else {
          res.write('Error 404 : not found')
        }
    
        res.end();
    }
  }