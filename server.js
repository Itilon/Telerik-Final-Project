const port = require('./app/config/port.config');

const async = () => {
    return Promise.resolve();
};

async()
    .then(() => require('./app/app')())
    .then((app) => {
            app.listen(port, () => console.log(`Server starts at :${port}`));
    });
