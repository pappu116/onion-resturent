import React, { useContext, useState } from "react";
import * as firebase from "firebase/app";
import "./Loggedin.css";
import "firebase/auth";
import Logo from "../../Image/logo2.png";
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
    password: "",
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

  //handelBlur callback
  const handelBlur = (event) => {
    let isFormValid = true;
    if (event.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
      console.log(isFormValid);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const isPasswordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && isPasswordHasNumber;
    }
    if (isFormValid) {
    }
  };
  ///--------------------->*
  //handelSubmit   *****++
  //  *************************
  const handelSubmit = (event) => {
    console.log("mama1");
  };

  return (
    <div className="loging-area">
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
      <div>
        <img style={{ height: "100px" }} src={Logo} alt="" />
      </div>
      <br />
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          required
          onBlur={handelBlur}
          name="name"
        />
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          required
          onBlur={handelBlur}
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
          required
          onBlur={handelBlur}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
