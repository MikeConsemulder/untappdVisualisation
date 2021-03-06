const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()

app.use(serveStatic(path.join(__dirname, 'dist')))

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 80
console.log('listening to port:', port)
app.listen(port)