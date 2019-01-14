const fs = require('fs');

function getValue(flag) {
    const index = process.argv.indexOf(flag);
    return (index > -1) ? process.argv[index + 1] : null;
}

const fileName = getValue('-f');
const fileContent = getValue('-c');

fs.writeFile(fileName, fileContent, error => {
    if (error) throw error;

    console.log('File created')
})

