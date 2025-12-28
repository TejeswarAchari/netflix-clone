import React, { useState, useRef, useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const isGptSearchActive = useSelector((store) => store.gpt.showGptSearch);

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // 🔹 Close dropdown when clicking outside
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
    const selectedLanguage = e.target.value;
    dispatch(changeLanguage(selectedLanguage));
  };
  return (
    <div className="absolute w-full z-10 px-4 py-2 md:px-8 md:py-3 bg-gradient-to-b from-black via-black/60 to-transparent flex justify-between items-center">
      <img className="w-24 md:w-44" src={LOGO} alt="logo" />

      {user && (
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
          
          {/* Hidden on mobile, shown on medium screens and up */}
          <p className="hidden md:block text-white font-bold text-sm md:text-base">
            {user.name}
          </p>

          {/* Profile Icon */}
          <img
            onClick={() => setShowMenu((prev) => !prev)}
            className="h-8 w-8 md:h-10 md:w-10 rounded-sm cursor-pointer hover:opacity-90 object-cover"
            src={user.photoURL}
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