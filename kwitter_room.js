var firebaseConfig = {
      apiKey: "AIzaSyAd1hXExO63yYI3pcDbXDaaEm5gtyO5B2U",
      authDomain: "kwitter-f1c8a.firebaseapp.com",
      databaseURL: "https://kwitter-f1c8a-default-rtdb.firebaseio.com",
      projectId: "kwitter-f1c8a",
      storageBucket: "kwitter-f1c8a.appspot.com",
      messagingSenderId: "91814116560",
      appId: "1:91814116560:web:68be2c687b4d8b565972d5",
      measurementId: "G-LVJL6X4KFG"
    };
    
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
  
     user_name = localStorage.getItem("username");
     document.getElementById("user_name").innerHTML ="Welcome " + user_name+"!";
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/.child(room_name").update({
       purpose : "adding room name"     
      });
      localStorage.setItem("room_name", room_name);
   
   window.location = "kwitter_page.html";

   firebase.database().rel("/").child(room_name).update({

   });
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addUser()
    {
      user_name = document.getElementById("user_name").value;
      firebase.database().rref("/").child(user_name).update({
       purpose :  "adding user"     
      });
    }


function logout() {

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}



function addRoom()
{

  room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"

});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";
}