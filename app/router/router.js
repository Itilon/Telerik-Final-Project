const fs = require('fs');
const path = require('path');
const { Router } = require('express');

const attachTo = (app) => {

    app.get('/', (req, res) => {
            return res.sendFile(path.join(__dirname, '../../static/index.html'));
        });

    const router = new Router();

    router
        // Catching the favicon request:
        .get('/favicon.ico', (req, res) => {
            res.status(204);
        });

};

module.exports = attachTo;