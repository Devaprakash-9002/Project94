// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyASkzlTbPjzIEHdNmm9PYjCR2s7T5_dvNI",
    authDomain: "letschat-c8e3c.firebaseapp.com",
    projectId: "letschat-c8e3c",
    storageBucket: "letschat-c8e3c.appspot.com",
    messagingSenderId: "504105466206",
    appId: "1:504105466206:web:4dda31b62a2cb06fd3f7cf",
    measurementId: "G-ZKHQH4F0NQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  persons_name = localStorage.getItem("user_name");
  document.getElementById("person_name").innerHTML = "Hello, " + persons_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addRoom() {
    rooms_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", rooms_name);
}