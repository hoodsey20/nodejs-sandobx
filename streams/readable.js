const fs = require('fs');

let data = '';

const input = fs.createReadStream('lorem.txt', 'utf-8');

input.on('data', (part) => {
    data += part;
	console.log("​part", part.length)
})
input.on('end', () => console.log("data", data.length));
input.on('error', (error) => console.log("error.message", error.message));