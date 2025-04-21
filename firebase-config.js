const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyDTyqah2o2fRNHBszGx7V68GZtVxQbDNnI",
    authDomain: "westpoint-3bfd8.firebaseapp.com",
    projectId: "westpoint-3bfd8",
    storageBucket: "westpoint-3bfd8.firebasestorage.app",
    messagingSenderId: "901126208240",
    appId: "1:901126208240:web:6f4fccf83ea64c9323a035",
    measurementId: "G-62MQMNF3K1" });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// Example: Sign-up function
const signUp=()=> {
    const email = document.getElementById("E-mail").value;
    const password = document.getElementById("P-assword").value;
    console.log (email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    const user = result.user;
    console.log("User signed up successfully:", user);

    // Redirect to index.html
    window.location.href = "index.html";
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