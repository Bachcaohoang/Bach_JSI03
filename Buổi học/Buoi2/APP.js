// const firebaseConfig = {
//     apiKey: "AIzaSyBoWAC88rk0R2YK6H7AixUzClAzfqFtRdo",
//     authDomain: "ryan-95ba6.firebaseapp.com",
//     projectId: "ryan-95ba6",
//     storageBucket: "ryan-95ba6.appspot.com",
//     messagingSenderId: "207700303042",
//     appId: "1:207700303042:web:4fca90d8321f0c23fdef5b",
//     measurementId: "G-0ZDEF2RFYJ"
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   const auth = firebase.auth();


function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        showUserInfo(user);
      })
      .catch((error) => {
        console.error('Error signing up:', error.message);
      });
  }