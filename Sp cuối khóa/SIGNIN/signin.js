import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBoWAC88rk0R2YK6H7AixUzClAzfqFtRdo",
    authDomain: "ryan-95ba6.firebaseapp.com",
    projectId: "ryan-95ba6",
    storageBucket: "ryan-95ba6.appspot.com",
    messagingSenderId: "207700303042",
    appId: "1:207700303042:web:4fca90d8321f0c23fdef5b",
    measurementId: "G-0ZDEF2RFYJ"
  };

  initializeApp(firebaseConfig);
  ;

const SignUp = document.getElementById("SignUp")
    SignUp.addEventListener('click', function(e) {
    signUp()
  })
  console.log(SignUp)

  function signUp() {
    // console.log("!23")
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCrendneial) =>{
        const user = userCrendneial.user;
        showUserInfo(user);

    })

    .catch((error) => {
        console.error('Error signing up:', error.message);
      });


    }
    
    const SignIn = document.getElementById(" SignIn")
    SignIn1.addEventListener('click', function(e) {
    SignIn1()
  })
  console.log(SignIn1)

  function SignIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        showUserInfo(user);
        window.location.href = 'page.html'; 
      })

      .catch((error) => {
        console.error('Error signing in:', error.message);
      });
    }


    function signOut() {
        auth.signOut()
          .then(() => {
            console.log('Signed out successfully');
            hideUserInfo();
          })
          .catch((error) => {
            console.error('Error signing out:', error.message);
          });
      }
      
      function showUserInfo(user) {
        document.getElementById('user-email').textContent = `Welcome, ${user.email}!`;
        document.getElementById('login').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
      }
      
      function hideUserInfo() {
        document.getElementById('user-email').textContent = '';
        document.getElementById('login').style.display = 'block';
        document.getElementById('user-info').style.display = 'none';
      }