import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, gptMovieResults } = useSelector((store) => store.gpt);

  if (!movieNames || !gptMovieResults) return null;

  return (
    <div className="relative z-10 p-4 m-4 bg-black text-white">
      {movieNames.map((movieName, index) =>
        gptMovieResults[index] ? (
          <MovieList
            key={`${movieName}-${index}`}
            title={movieName}
            movies={gptMovieResults[index]}
          />
        ) : null
      )}
    </div>
  );
};

export default GptMovieSuggestions;
