import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCtxn5wYkddpFUNjUO0zdWb6iJ8AHfasXE",
  authDomain: "kevin-todoapp.firebaseapp.com",
  databaseURL: "https://kevin-todoapp.firebaseio.com",
  storageBucket: "kevin-todoapp.appspot.com",
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'TodoApp',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Kevin',
    age: 21
  }
});


var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo1'
});

todosRef.push({
  text: 'Todo2'
});




// firebaseRef.once('value').then ((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value',e);
// });

// firebaseRef.child('app').once('value').then ((snapshot) => {
//   console.log('Got entire database',snapshot.key,  snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value',e);
// });

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Mike'});
//
// firebaseRef.child('app').update({name: 'Something Else!'});

// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();
//REMOVE ALL ITEMS
// firebaseRef.remove();

//REMOVE ITEM IN OBJECT USING CHILD
//firebaseRef.child('app/name').remove();

//REMOVE ITEM USING UPDATE
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });


//EXAMPLE OF UPDATE USING MULTI PATH
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Applicatin',
//   'user/name': 'Mike'
// });

//UPDATE USING CHILD
// firebaseRef.child ('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('Update worked!');
// }, (e) => {
//   console.log('Update Failed!');
// });
//
// firebaseRef.child('user').update({
//   name: 'Mike'
// }).then(() => {
//   console.log('Update Worked!');
// }, (e) => {
//   console.log('Update Failed');
// })


// EXAMPLE OF HOW SET USES PROMISES
// .then (() => {
//   console.log('Set worked!');
// }, (e) => {
//   console.log('Set failed');
// })
//EXAMPLE OF SET
// // firebaseRef.set({
// //   appName: 'Todo Application'
// // });
//
// firebaseRef.child('user').set({
//   name: 'Mike'
// });
//
// firebaseRef.child('newApp').set({
//   name: 'TodoApp'
// });
