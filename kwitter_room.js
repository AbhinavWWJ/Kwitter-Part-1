
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyApplu9i7LX3W2ocN4Gv3uaEbkjHDxMSYg",
      authDomain: "kwitter-8d2f9.firebaseapp.com",
      projectId: "kwitter-8d2f9",
      storageBucket: "kwitter-8d2f9.appspot.com",
      messagingSenderId: "490778282894",
      appId: "1:490778282894:web:95f16e76fda667886af2df",
      measurementId: "G-9SERT9YCML"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
