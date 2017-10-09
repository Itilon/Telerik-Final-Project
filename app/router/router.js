const path = require('path');
const fs = require('fs');

const attachTo = (app, data) => {
    app.get('/', (req, res) => {
        return res.sendFile(path.join(__dirname, '../../static/index.html'));
    });
};

module.exports = attachTo;