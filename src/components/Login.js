import React, { useState } from "react";
import Header from "./Header";
import { BG_IMAGE_URL } from "../utils/constants";
import { SignIn, SignUp } from "@clerk/clerk-react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  // Manual Dark Theme (Fixes the crash by avoiding the broken import)
  const clerkAppearance = {
    variables: {
      colorPrimary: "#e50914", // Netflix Red
      colorText: "#ffffff",    // White text
      colorBackground: "#1a1a1a", // Dark gray background
      colorInputBackground: "#333333", // Darker gray inputs
      colorInputText: "#ffffff", // White typing
    },
    elements: {
        rootBox: "w-full mx-auto",
        card: "shadow-2xl rounded-xl border border-gray-800 mx-auto",
        footer: "hidden",
        formFieldInput: "border-gray-700 focus:border-red-600",
        formButtonPrimary: "hover:bg-red-700",
        socialButtonsBlockButton: "bg-white text-black hover:bg-gray-200 border-none",
        headerTitle: "text-white",
        headerSubtitle: "text-gray-400"
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          className="h-full w-full object-cover"
          src={BG_IMAGE_URL}
          alt="background"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Content Centered */}
      <div className="flex-grow flex flex-col justify-center items-center px-4 w-full pt-16">
        
        <div className="w-full max-w-[400px]">
          {isSignInForm ? (
            <SignIn appearance={clerkAppearance} />
          ) : (
            <SignUp appearance={clerkAppearance} />
          )}
        </div>

        {/* CUSTOM TOGGLE BUTTON */}
        <div 
            className="mt-6 bg-black/80 backdrop-blur-md border border-gray-700 px-6 py-3 rounded-full cursor-pointer hover:bg-red-700/90 hover:border-red-600 transition-all duration-300 group"
            onClick={() => setIsSignInForm(!isSignInForm)}
        >
            <p className="text-gray-300 text-sm font-medium group-hover:text-white">
                {isSignInForm ? "New to FrameOne? " : "Already have an account? "}
                <span className="text-white font-bold group-hover:underline ml-1">
                    {isSignInForm ? "Sign Up Now" : "Sign In"}
                </span>
            </p>
        </div>

      </div>
    </div>
  );
};

export default Login;