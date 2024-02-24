const firebaseConfig = {
    apiKey: "AIzaSyCDbWcjDOg7L4_TgA7B3m7IfpSgfxdZeCU",
    authDomain: "anonchatbox.firebaseapp.com",
    projectId: "anonchatbox",
    storageBucket: "anonchatbox.appspot.com",
    messagingSenderId: "824201855497",
    appId: "1:824201855497:web:6eaa5ed827353a0ff02ed8",
    measurementId: "G-4X61XV634T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = app.auth();
  const database = app.database();
  
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

var email = "";
var password = "";
var username = "";

function register(){
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    username = document.getElementById("username").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(function()
    {
       var user = auth.currentUser;
        alert(user+" created!!");

        var data_ref = database = database.ref();

        var user_data = {
            email : email,
            username : username,
            last_login : Date.now()
        }

        data_ref.child('users/'+user_uid).set(user_data);
       
    })
    .catch(function(error) {
        alert(error.message);
    })
}

function login(){
    
}

