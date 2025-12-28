import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        {/* Adjusted negative margin to prevent overlap with title/buttons */}
        <div className="mt-0 md:-mt-40 lg:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={"Trending"}
            movies={movies.topRatedMovies}
          />
          <MovieList
            title={"Popular"}
            movies={movies.popularMovies}
          />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
          <MovieList
            title={"Horror"}
            movies={movies.horrorMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;