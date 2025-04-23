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
    const E_mail = document.getElementById("E-mail").value;
    const P_assword = document.getElementById("P-assword").value;
    firebase.auth().createUserWithEmailAndPassword(E_mail, P_assword)
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
// function to check if the user is logedout or not 
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is logged in
//     console.log("User is logged in:", user);
//   } else {
//     // User is logged out
//     console.log("User is logged out.");
//   }
// });