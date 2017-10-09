const express = require('express');

const init = (data) => {
    const app = express();

    require('../config/app.config')(app);

    require('../router/router')(app, data);

    return Promise.resolve(app);
}

module.exports = init;