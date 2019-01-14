const fs = require('fs');

const watcher = fs.watch(__dirname, (event, filename) => {
	console.log("​filename", filename)
	console.log("​event", event)
});

watcher.on('error', error => {
	console.log("​error", error)
})