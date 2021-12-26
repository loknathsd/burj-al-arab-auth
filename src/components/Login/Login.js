import React from 'react';
import * as firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup } from 'firebase/auth';
import firebaseConfig from './firebase.config';

const Login = () => {
    const app = initializeApp(firebaseConfig);
    const handleGoogleSignIn=()=>{
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
          const credential = result.credential;
          const token = credential.accessToken;
          var user = result.user;
          console.log(user)
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorMessage,errorCode)
        });
        
    }
    return (
        <div style={{textAlign:'center'}}>
            <h1>this is loggin</h1>
            <button onClick={handleGoogleSignIn}>SignIn with Google</button>
        </div>
    );
};

export default Login;