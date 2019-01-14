const fs = require('fs');

const fileName = 'note.txt';

fs.readdir(__dirname, (error, contents) => {
    if (error) throw error;
    if (contents.indexOf(fileName) > -1) {
        fs.appendFile(fileName, '!!!', error => {
            if (error) throw error;
            console.log('file appended')
        })
    } else {
        fs.writeFile(fileName, 'Hello Node.js', error => {
            if (error) throw error;
        
            console.log('File created')
        })
    }
});

