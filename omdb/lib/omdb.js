const http = require('http');
const apikey = 'e2ef4642';

function get(title, done) {
    const req = http.get(`http://www.omdbapi.com/?t=${title}&apikey=${apikey}`, res => {
        if (res.statusCode !== 200) {
            done(new Error(`Get data error: ${res.statusMessage} : ${res.statusCode}`));
            res.resume();
            return;
        }

        res.setEncoding('utf-8');

        let body = '';

        res.on('data', data => body += data);

        res.on('end', () => {
            let result;

            try {
                result = JSON.parse(body);
            } catch (error) {
                done(error);
            }

            if (result.Response === 'False') return done(new Error('Moovie not found'))

            done(null, result);
        })

        req.on('error', error => done(error));
    })
}

module.exports = {
    get,
}