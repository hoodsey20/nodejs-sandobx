const fs = require('fs');

console.log('reading dir...');
fs.readdir(__dirname, (error, contents) => {
    if (error) throw error;
	console.log("​contents", contents)
    console.log('finished reading')
});  