import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtxn5wYkddpFUNjUO0zdWb6iJ8AHfasXE",
    authDomain: "kevin-todoapp.firebaseapp.com",
    databaseURL: "https://kevin-todoapp.firebaseio.com",
    storageBucket: "kevin-todoapp.appspot.com",
    };
  firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
