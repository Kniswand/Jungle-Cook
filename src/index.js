import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyDjo3Yn2TQxK8fr20vnvPobLMIzl1psl9I",
  
    authDomain: "n315-ksn.firebaseapp.com",
  
    projectId: "n315-ksn",
  
    storageBucket: "n315-ksn.appspot.com",
  
    messagingSenderId: "617353120007",
  
    appId: "1:617353120007:web:4be10ffc240257d51adda2",
  
    measurementId: "G-5HP04R2TQ1"
  
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

$("#createAcctBtn").on("click", (e) => {
    let firstName = $("#fNameC").val();
    let emailC = $("#emailCreateC").val();
    let passwordC = $("#pwCreateC").val();
    console.log("name: " + firstName);

    createUserWithEmailAndPassword(auth, emailC, passwordC)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error Message: " + errorMessage);
        });
});

$("#signInBtn").on("click", (e) => {
    let emailSignIn = $("#emailSignIn").val();
    let pwSignIn = $("#pwSignIn").val();

    signInWithEmailAndPassword(auth, emailSignIn, pwSignIn)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error Message: " + errorMessage);
        });
});

$("#signOut").on("click", (e) => {
    console.log("sign out")
    signOut(auth)
        .then(() => {
            console.log("Signed out");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error Message: " + errorMessage);
        });
});
