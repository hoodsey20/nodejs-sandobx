const http = require('http');


const server = http.createServer((req, res) => {
	console.log('TCL: req11', req.headers)
	debugger;
	res.end('kek');
});

server.listen(3000, () => {
	console.log('TCL: smth')
})