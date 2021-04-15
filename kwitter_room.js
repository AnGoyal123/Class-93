
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDYZFVgcvRzxBPAClb0G9OjRZOCD7N_jtc",
      authDomain: "kwitter-project-624db.firebaseapp.com",
      databaseURL: "https://kwitter-project-624db-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-624db",
      storageBucket: "kwitter-project-624db.appspot.com",
      messagingSenderId: "617061220847",
      appId: "1:617061220847:web:e2425417e097bed297761a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
