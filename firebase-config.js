
window.firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyDTyqah2o2fRNHBszGx7V68GZtVxQbDNnI",
  authDomain: "westpoint-3bfd8.firebaseapp.com",
  databaseURL: "https://westpoint-3bfd8-default-rtdb.asia-southeast1.firebasedatabase.app/", 
  projectId: "westpoint-3bfd8",
  storageBucket: "westpoint-3bfd8.firebasestorage.app",
  messagingSenderId: "901126208240",
  appId: "1:901126208240:web:6f4fccf83ea64c9323a035",
  measurementId: "G-62MQMNF3K1"
 });
window.auth = firebaseApp.auth();

// connecting to the database
window.database = firebase.database();
window.database.ref(".info/connected").on("value", (snap) => {
  console.log(snap.val() ? "Realtime DB connected" : "DB disconnected");
});


// function to write user data to the database
function writeUserData(userId, name, email, imageUrl = "") {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl
  }).then(() => {
    console.log("Data saved successfully!");
  }).catch((error) => {
    console.error("Error saving data:", error);
  });
}

// Example: Sign-up function
const signUp = () => {
    const email = document.getElementById("E-mail").value;
    const password = document.getElementById("P-assword").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const username = firstname + " " + lastname;

    // Validate inputs
    if (!email || !password || !firstname || !lastname) {
        alert("Please fill all fields!");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
        // Signed in 
        const user = result.user;
        alert("you are signed up successfully");

        // Set the display name
        return user.updateProfile({
            displayName: username,
        }).then(() => {
            // Save user data to the database
            writeUserData(user.uid, username, email); 
            
            // Redirect to index.html
            window.location.href = "index.html";
        });
    })
    .catch((error) => {
        // Handle errors
        console.error("Error signing up:", error.code, error.message);
        alert(`Error: ${error.message}`);
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

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("User is signed in:", user);
        // ✅ Sync cart only after auth is ready
        window.syncCartWithFirebase?.();
    } else {
        console.log("No user is signed in.");
    }
});
