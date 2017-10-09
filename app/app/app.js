const express = require('express');

const init = () => {
    const app = express();

    require('../config/app.config')(app);

    require('../router/router')(app);

    return Promise.resolve(app);
}

module.exports = init;