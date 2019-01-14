const fs = require('fs');
const zlib = require('zlib');

const input = fs.createReadStream('lorem.txt', 'utf-8');
const output = fs.createWriteStream('lorem.md.gzip');
const gzip = zlib.createGzip();

input.pipe(gzip).pipe(output);

input.on('error', (error) => console.log("error.message", error.message))
