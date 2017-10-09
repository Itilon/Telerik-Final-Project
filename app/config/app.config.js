const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const configApp = (app) => {

    app.use('/static', express.static(
        path.join(__dirname, '../../static'))
    );

    app.use('/libs', express.static(
        path.join(__dirname, '../../node_modules'))
    );
    
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: true }));
};

module.exports = configApp;