import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/IN-en-20251222-TRIFECTA-perspective_a882efaa-75c8-4143-9dc1-4f9932a791ac_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute my-36 mx-auto right-0 left-0  text-white  p-12 rounded-lg bg-black bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
            { ! isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 rounded-sm w-full bg-gray-700"
        />}
        <input
          type="email"
          placeholder="Email address"
          className="p-4 my-4 rounded-sm w-full bg-gray-700"
        />
 

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 rounded-sm w-full bg-gray-700"
        />

        <button className="bg-red-600 w-full text-white px-6 py-3 my-2 rounded-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
