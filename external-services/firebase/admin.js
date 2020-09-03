const admin = require("firebase-admin");

const serviceAccount = require("../../config/firebase-admin-config.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://vue-chat-c96fa.firebaseio.com"
});

module.exports = admin;
