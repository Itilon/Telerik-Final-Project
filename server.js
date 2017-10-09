const port = require('./app/config/port.config');
const path = require('path');

const async = () => {
    return Promise.resolve();
}

async()
    .then(() => require('./app/db'))
        .then((db) => require('./app/data')(db))
        .then((data) => require('./app/app')(data))
        .then((app) => {
            app.listen(port, () => console.log(`Server starts at :${port}`));
        });
