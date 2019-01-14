const EventEmitter = require('./event-emitter');
const emitter = new EventEmitter();

class Timer extends EventEmitter {
    constructor(total) {
        super();
        this.total = total;
        this.ticks = 0;
    }

    start() {
        this.interval = setInterval(() => this.tick(), 1000);
        this.emit('start');
    }

    tick() {
        this.ticks += 1;

        if (this.ticks <= this.total) {
            this.emit('tick', this.ticks)
        } else {
            this.end();
        }
    }

    end() {
        clearInterval(this.interval);
        this.emit('end');
    }
}

const timer = new Timer(10);
timer.on('start', () => console.log('timer started'));
timer.on('tick', tick => console.log(tick));
timer.on('end', () => console.log('timer ended'));
timer.start();