const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 menit
    max: 100, //limit each IP to 100 request per windowsMs
    message: {
        status:429,
        error: 'Terlalu banyak request, coba lagi nanti'
    }
});

module.exports = limiter