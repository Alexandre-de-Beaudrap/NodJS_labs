"use strict";
express = require('express');
app = express();
metrics = require('./metrics');
path = require('path');
app.set('port', 1337);
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'), function () { return console.log("server listening on " + app.get('port')); });
app.get('/', function (req, res) { return res.send('Hello, if you want to see your name on the screen and a button to have metrics you must ad (/hello/YOUR_NAME) to the url'); });
app.get('/hello/:name', function (req, res) { return res.render('hello.ejs', { name: req.params.name }); });
app.get('/metrics.json', function (req, res) {
    metrics.get(function (err, data) {
        if (err)
            throw err;
        res.status(200).json(data);
    });
});
