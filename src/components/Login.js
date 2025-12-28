import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

import { BG_IMAGE_URL, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    const message = checkValidateData(
      email.current.value,
      password.current.value,
      isSignInForm ? null : name.current.value
    );

    setErrorMessage(message ? message.message : "");
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  name: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img
          className="h-screen w-screen object-cover"
          src={BG_IMAGE_URL}
          alt="logo"
        />
      </div>
      <form className="w-10/12 md:w-8/12 lg:w-3/12 absolute p-6 md:p-12 bg-black my-24 md:my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl md:text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 md:p-4 my-2 md:my-4 rounded-sm w-full bg-gray-700 text-sm md:text-base"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-3 md:p-4 my-2 md:my-4 rounded-sm w-full bg-gray-700 text-sm md:text-base"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 md:p-4 my-2 md:my-4 rounded-sm w-full bg-gray-700 text-sm md:text-base"
        />

        <p className="text-red-600 font-bold text-sm md:text-base py-2">{errorMessage}</p>

        <button
          className="bg-red-600 w-full text-white px-6 py-3 my-4 rounded-sm hover:bg-red-700 transition duration-200"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer text-sm md:text-base" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;