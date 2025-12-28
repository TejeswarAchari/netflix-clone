import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import client from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // 1. Make the API Call
    const gptQuery =
      "Act as a strict Movie Database API. Suggest 5 REAL movie names for the query: '" +
      searchText.current.value +
      "'. Constraints: 1. Results must be actual movie titles from IMDB/TMDB. 2. Do NOT act as a search engine—do not give me production house names or genres (e.g., do not say 'Geetha Arts Horror Movie'). 3. If you cannot find 5 exact matches, fill the rest with popular relevant movies. 4. Output format: Comma-separated list ONLY. Example: Movie A, Movie B, Movie C, Movie D, Movie E";

    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "llama-3.3-70b-versatile",
    });

    if (!gptResults.choices) {
      console.error("No results found");
      return;
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    console.log("GPT Movie Suggestions:", gptMovies);

    // gptMovies is an array of movie names
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);
    dispatch(
      addGptMovieResults({
        movieNames: gptMovies,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-11/12 md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-2 md:p-4 md:m-4 col-span-9 rounded-lg"
          placeholder={
            lang[langkey]?.gptSearchPlaceholder ||
            "Search for movies using GPT..."
          }
        />
        <button
          className="col-span-3 m-2 md:m-4 py-2 px-2 md:px-4 bg-red-700 text-white rounded-lg font-semibold"
          onClick={handleGptSearchClick}
        >
          {lang[langkey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;