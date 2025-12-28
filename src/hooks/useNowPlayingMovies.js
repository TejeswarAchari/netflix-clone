import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";


const useNowPlayingMovies = () => {
      const dispatch = useDispatch();
      const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)
 const getNowPlayingMovies = async () => {
  const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS)
  const jsonData = await data.json()

    dispatch(addNowPlayingMovies(jsonData.results))
 }

 useEffect(() => {
  !nowPlayingMovies && getNowPlayingMovies();

 },[nowPlayingMovies]);
}
export default useNowPlayingMovies;