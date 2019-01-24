const fs = require('fs');
const path = require('path');

function home(req, res) {    
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const stream = fs.createReadStream(path.join(__dirname, '..', 'public', 'index.html'));

    stream.pipe(res);
}

module.exports = home;