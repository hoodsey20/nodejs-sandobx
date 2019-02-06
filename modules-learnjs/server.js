const log = require('./logger')(module);

function run() {
    log('server.js on air!')
}

if (module.parent) {
    module.exports = run;
} else {
    run();
}