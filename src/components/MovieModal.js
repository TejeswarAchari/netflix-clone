import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";
import { closeMoviePreview } from "../utils/moviesSlice";

const MovieModal = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movies.moviePreview);
  const [trailerKey, setTrailerKey] = useState(null);

  // Fetch Trailer specific to this movie
  useEffect(() => {
    if (!movie) return;

    const getMovieVideos = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        const filterData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setTrailerKey(trailer?.key);
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };
    getMovieVideos();
  }, [movie]);

  if (!movie) return null;

  // Function to close modal when clicking the backdrop
  const handleBackdropClick = (e) => {
    dispatch(closeMoviePreview());
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-80 overflow-y-auto pt-10 px-4 pb-10"
      onClick={handleBackdropClick} // Close when clicking outside
    >
      <div 
        className="relative w-full max-w-4xl bg-[#181818] rounded-lg shadow-2xl text-white flex flex-col h-fit"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        
        {/* Close Button - Made larger and clearer */}
        <button
          onClick={() => dispatch(closeMoviePreview())}
          className="absolute top-2 right-2 md:top-4 md:right-4 z-50 text-white bg-black bg-opacity-60 rounded-full p-2 hover:bg-red-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Section */}
        <div className="relative aspect-video w-full rounded-t-lg overflow-hidden">
          {trailerKey ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0`}
              title="movie trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={IMG_CDN_URL + movie.backdrop_path}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          )}
          {/* Fade effect */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#181818] to-transparent pointer-events-none"></div>
        </div>

        {/* Details Section */}
        <div className="p-6 md:p-10 -mt-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Left: Title & Info */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{movie.title}</h2>
              
              <div className="flex items-center gap-4 mb-4 text-sm md:text-base text-gray-400">
                <span className="text-green-500 font-bold">{Math.round(movie.vote_average * 10)}% Match</span>
                <span>{movie.release_date?.split("-")[0]}</span>
                <span className="border border-gray-600 px-1 rounded text-xs">HD</span>
              </div>

              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                {movie.overview}
              </p>
            </div>

            {/* Right: Extra Details */}
            <div className="w-full md:w-1/3 text-sm text-gray-400 space-y-2 mt-4 md:mt-0">
               <div>
                  <span className="text-gray-500">Original Language:</span>{" "}
                  <span className="text-white capitalize">{movie.original_language}</span>
               </div>
               <div>
                  <span className="text-gray-500">Popularity:</span>{" "}
                  <span className="text-white">{Math.round(movie.popularity)}</span>
               </div>
               <div>
                  <span className="text-gray-500">Vote Count:</span>{" "}
                  <span className="text-white">{movie.vote_count}</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;