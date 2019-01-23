const fs = require('fs');
const path = require('path');

function public(req, res) {     
    const extension = path.extname(req.url);
    let contentType = '';
    switch (extension) {
        case '.html':
            contentType = 'text/html'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.png':
            contentType = 'image/png'
            break;
    
        default:
            contentType = 'text/plain'
            break;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);

    const stream = fs.createReadStream(path.join(__dirname, '..', 'public', req.url));

    stream.pipe(res);
    stream.on('error', error => {
        if (error.code === 'ENOENT') {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
        } else {
            res.writeHead(505, {'Content-Type': 'text/plain'});
            res.end(error.message);
        }
    })
}

module.exports = public;