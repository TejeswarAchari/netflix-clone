import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 text-white">
      <h1 className="text-lg md:text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard 
                key={movie.id} 
                posterPath={movie.poster_path} 
                movie={movie} // Pass the full movie object here!
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;