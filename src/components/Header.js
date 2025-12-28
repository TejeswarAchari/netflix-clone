import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

// CLERK IMPORTS
import { useUser, useClerk } from "@clerk/clerk-react";

import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Clerk Hooks
  const { user, isSignedIn, isLoaded } = useUser();
  const { signOut } = useClerk();

  const isGptSearchActive = useSelector((store) => store.gpt.showGptSearch);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // 🔹 SYNC CLERK USER TO REDUX STORE
  // This replaces the old Firebase onAuthStateChanged
  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn && user) {
        // User is logged in -> Add to Redux
        const { id, primaryEmailAddress, fullName, imageUrl } = user;
        dispatch(
          addUser({
            uid: id,
            email: primaryEmailAddress?.emailAddress,
            name: fullName || "User",
            photoURL: imageUrl,
          })
        );
        // Only navigate if we are currently on the login page ("/")
        if (window.location.pathname === "/") {
            navigate("/browse");
        }
      } else {
        // User is logged out -> Remove from Redux
        dispatch(removeUser());
        navigate("/");
      }
    }
  }, [isLoaded, isSignedIn, user, dispatch, navigate]);

  const handleSignOut = async () => {
    await signOut();
    // Redux update is handled by the useEffect above automatically
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full z-10 px-4 py-2 md:px-8 md:py-3 bg-gradient-to-b from-black via-black/60 to-transparent flex justify-between items-center">
      {/* 🔹 UPDATED LOGO: Text instead of Image to avoid bans */}
      <h1 className="text-3xl font-bold text-red-600 tracking-wide cursor-pointer" onClick={()=> navigate("/")}>
        FrameOne
      </h1>

      {isSignedIn && user && (
        <div ref={menuRef} className="relative flex items-center gap-2">
          {isGptSearchActive && (
            <select
              className="p-1 md:p-2 m-1 md:m-2 bg-gray-900 text-white text-xs md:text-base rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGPTSearchClick}
            className="bg-red-600 text-white rounded-md px-2 py-1 text-xs md:px-5 md:py-2 md:text-base hover:bg-red-700 transition-colors"
          >
            {isGptSearchActive ? "Back to Home" : "Ask GPT"}
          </button>
          
          <p className="hidden md:block text-white font-bold text-sm md:text-base">
            {user.fullName}
          </p>

          <img
            onClick={() => setShowMenu((prev) => !prev)}
            className="h-8 w-8 md:h-10 md:w-10 rounded-full cursor-pointer hover:opacity-90 object-cover border-2 border-transparent hover:border-white transition"
            src={user.imageUrl}
            alt="user-profile"
          />

          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute right-0 top-10 md:top-14 w-36 md:w-44 bg-black border border-gray-700 rounded-sm shadow-xl overflow-hidden z-20"
              >
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-xs md:text-sm text-white hover:bg-gray-800 transition"
                >
                  Sign Out
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Header;