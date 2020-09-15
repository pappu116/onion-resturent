import React, { useContext, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
  });
  const provider = new firebase.auth.GoogleAuthProvider();
  const handelGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        // setLoggedInUser(signedInUser);
        setUser(signedInUser);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };
  //handelGoogleSignOut
  const handelGoogleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setUser(signOutUser);
      })
      .catch((err) => {
        // An error happened.
      });
  };
  return (
    <div>
      <h1>This is Logged in</h1>
      {user.isSignedIn ? (
        <button onClick={handelGoogleSignOut}>SignOut</button>
      ) : (
        <button onClick={handelGoogleSignIn}>SignIn Google</button>
      )}
      {user.isSignedIn && (
        <div>
          <p>Welcome {user.name}</p>
          <p>Email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}
      <h1>LoogedIn</h1>
      <input type="text" />
      <br />
      <input type="password" name="" id="" />
    </div>
  );
};

export default Login;
