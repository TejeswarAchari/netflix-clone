import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { setMoviePreview } from "../utils/moviesSlice";

const MovieCard = ({ posterPath, movie }) => {
  const dispatch = useDispatch();

  if (!posterPath) return null;

  const handleMovieClick = () => {
    dispatch(setMoviePreview(movie));
  };

  return (
    <div 
      onClick={handleMovieClick}
      className="w-36 md:w-48 pr-4 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
    >
      <img
        className="rounded-lg"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};
export default MovieCard;