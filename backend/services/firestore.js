const admin = require('firebase-admin');

let db = null;

try {
  if (!admin.apps.length) {
    admin.initializeApp();
  }
  db = admin.firestore();
} catch (error) {
  console.log('Failed to initialize Firestore:', error.message);
  db = null;
}

module.exports = db;
