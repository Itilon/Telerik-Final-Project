const admin = require('firebase-admin');

const serviceAccount = require('../firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sport-vision-a49b7.firebaseio.com"
});

const db = admin.database();

module.exports = db;