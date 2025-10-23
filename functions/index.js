/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { defineSecret } = require('firebase-functions/params');
const { onRequest } = require("firebase-functions/https");

const secretMessage = defineSecret('SECRET_MESSAGE');

exports.helloWorld = onRequest({
    secrets: [secretMessage]
}, (request, response) => {
    response.send(`Hello from Firebase!\n The secret message is: ${secretMessage.value()}`);
});
