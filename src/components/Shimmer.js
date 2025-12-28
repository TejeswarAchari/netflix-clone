import React from "react";

const Shimmer = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      {/* Hero Section Shimmer */}
      <div className="relative w-full aspect-video bg-gray-900 animate-pulse">
        <div className="absolute top-[30%] left-12 space-y-4">
          <div className="h-8 md:h-12 w-48 md:w-96 bg-gray-800 rounded"></div>
          <div className="hidden md:block h-24 w-1/3 bg-gray-800 rounded"></div>
          <div className="flex gap-4 pt-4">
            <div className="h-10 w-24 bg-gray-700 rounded"></div>
            <div className="h-10 w-24 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>

      {/* Movie Rows Shimmer */}
      <div className="relative z-20 -mt-24 pl-4 md:pl-12 space-y-12 pb-10">
        {[1, 2, 3].map((row, index) => (
          <div key={index} className="space-y-4">
            {/* Title Bar */}
            <div className="h-6 w-32 bg-gray-800 rounded animate-pulse"></div>
            {/* Cards Row */}
            <div className="flex gap-4 overflow-hidden">
              {[1, 2, 3, 4, 5, 6, 7].map((card) => (
                <div
                  key={card}
                  className="flex-shrink-0 w-36 md:w-48 h-56 md:h-72 bg-gray-900 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;