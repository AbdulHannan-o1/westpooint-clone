
const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyDTyqah2o2fRNHBszGx7V68GZtVxQbDNnI",
  authDomain: "westpoint-3bfd8.firebaseapp.com",
  databaseURL: "https://westpoint-3bfd8-default-rtdb.asia-southeast1.firebasedatabase.app/", 
  projectId: "westpoint-3bfd8",
  storageBucket: "westpoint-3bfd8.firebasestorage.app",
  messagingSenderId: "901126208240",
  appId: "1:901126208240:web:6f4fccf83ea64c9323a035",
  measurementId: "G-62MQMNF3K1"
 });
const auth = firebaseApp.auth();
// Example: Sign-up function
const signUp=()=> {
    const E_mail = document.getElementById("E-mail").value;
    const P_assword = document.getElementById("P-assword").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const username = firstname + " " + lastname;

    firebase.auth().createUserWithEmailAndPassword(E_mail, P_assword)
  .then((result) => {
      // Signed in 
      const user = result.user;

      //set the display name
      return user.updateProfile({
        displayName: username,
      }).then(() => {

      console.log("user signed in with display name :", user.displayName);

      // Redirect to index.html
      window.location.href = "index.html";
    })
  })
  .catch((error) => {
     // Handle errors
    const errorCode = error.code;
    const errorMessage = error.message;

     console.error("Error signing up:", errorCode, errorMessage);

     // Display error message to the user
     alert(`Error: ${errorMessage}`);
  });
};
// logging user back in 

const login = (event) => {
  event.preventDefault(); // Prevent form submission
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .then((userCredential) => {
      console.log("Login successful:", userCredential.user);
      window.location.href = "index.html";
      alert("You are logged in successfully");
    })
    .catch((error) => {
      console.error("Error setting persistence:", error);
      alert("Error: " + error.message);
    });
};

//logging user out 
const logout = () => {
  firebase.auth().signOut()
    .then(() => {
    window.location.href = "index.html";
    alert("you are loged out successfully")
  })
  .catch((error) => {
    console.error("Error signing out:", error);
    alert("email or password is incorrect")
  });
}

// function to show current user's name
firebase.auth().onAuthStateChanged((user) => {
  const userName = document.getElementById("userName");
  if (user) {
    // User is signed in
    console.log("User is signed in:", user);
    userName.innerHTML = user.displayName || user.email || "No username available";
  } else {
    // No user is signed in
    console.log("No user is signed in.");
    userName.innerHTML = "Not logged in";
  }
});


// connecting to the database 
// var defaultdatabase = firebase.database();  
// firebase.database.enableLogging(false );
// console.log(defaultdatabase); // Check if the database is connected 

// connection to the database
// Get a reference to the database service
// With this:
const database = firebase.database();
database.ref(".info/connected").on("value", (snap) => {
  console.log(snap.val() ? "🟢 Realtime DB connected" : "🔴 DB disconnected");
});