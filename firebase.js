//----------------------------- FireBase - FireStore

firebase.initializeApp({
  apiKey: 'AIzaSyBmvMYCvWIMNidpbm5HknwnFDHznfYArKg',
  authDomain: 'controle-de-faltas-8d249.firebaseapp.com',
  projectId: 'controle-de-faltas-8d249'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
