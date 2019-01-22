const http = require('http');
const todos = require('./data/todos.json');

http.createServer((req, res) => {
    if (req.url === '/todos') {
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        res.end(JSON.stringify(todos));  
    } else if (req.url === '/todos/completed') {
        const response = todos.filter(item => item.completed);
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        res.end(JSON.stringify(response));  
    } else if (req.url.match(/\/todos\/\d+/)) {
        const id = parseInt(req.url.replace(/\D+/, ''));
		console.log("​id", id)
        const response = todos.find(item => item.id === id);
        if (!response) {
            res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('Not found')
        } else {
            const id = parseInt(req.url.replace(/\D+/, ''));
            const response = todos.find(item => item.id === id);    
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            res.end(JSON.stringify(response));          
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Not found')        
    }




}).listen(3000, () => console.log('on air'));