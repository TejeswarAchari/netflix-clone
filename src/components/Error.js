import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { BG_IMAGE_URL } from "../utils/constants";

const Error = () => {
  const err = useRouteError(); // Optional: captures the specific error details

  return (
    <div className="relative h-screen w-screen bg-black text-white flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
             <img className="h-full w-full object-cover opacity-30" src={BG_IMAGE_URL} alt="bg" />
        </div>

      <div className="relative z-10 p-4">
        <h1 className="text-6xl md:text-9xl font-bold text-red-600">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold my-4">Page Not Found</h2>
        <p className="text-gray-300 text-lg mb-8">
          Sorry, we couldn't find the page you were looking for.
        </p>
        
        <Link to="/browse">
          <button className="bg-white text-black px-6 py-3 rounded font-bold hover:bg-red-600 hover:text-white transition-all duration-300">
            Back to Home
          </button>
        </Link>

        {/* Optional: Show technical error if available */}
        {err && (
          <p className="mt-8 text-gray-500 text-sm">
            {err.status}: {err.statusText}
          </p>
        )}
      </div>
    </div>
  );
};

export default Error;