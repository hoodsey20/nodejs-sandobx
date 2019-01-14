const https = require('https');

function getRepos(username, done) {
    if (!username) return done(new Error(`Users name should be specified`))

    const options =   {
        hostname: 'api.github.com',
        path: `/users/${username}/repos`,
        headers: { 'User-Agent': 'hoodsey20' }
    }

    const req = https.get(options, res => {
        res.setEncoding('utf-8')

        if (res.statusCode !== 200) {
            return done(new Error(`No data available: ${res.statusCode} ${res.statusMessage}`))
        }
        
        let body = '';

        res.on('data', data => body += data);

        res.on('end', () => {
            let result;
            try {
                result = JSON.parse(body);
                return done(null, result);
            } catch (error) {
                return done(new Error(`Data parsing error: ${error.message}`))
            }   
        })
    })

    req.on('error', error => done(new Error(`Request fail: ${error.message}`)));
}

module.exports = {
    getRepos,
}