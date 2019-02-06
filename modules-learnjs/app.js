const log = require('./logger')(module);

const run = require('./server');

log('hello from app.js');
run();