const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('start', (msg) => console.log(msg))
emitter.once('started once', (msg) => console.log(msg))
emitter.emit('start', 'Started!!')
emitter.emit('started once', 'Started once!!')
emitter.emit('started once', 'Started once!!')
emitter.removeAllListeners();
emitter.emit('start', 'Started!!')