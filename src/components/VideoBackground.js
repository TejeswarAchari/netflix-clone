import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-full">
      {/* <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerId +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> */}
      <iframe
  className="w-full aspect-video"
  src={
    "https://www.youtube.com/embed/" +
    trailerId +
    "?autoplay=1&mute=1&loop=1&playlist=" +
    trailerId +
    "&controls=0&modestbranding=1&rel=0"
  }
  title="YouTube video player"
  allow="autoplay; encrypted-media"
  referrerPolicy="strict-origin-when-cross-origin"
/>

    </div>
  );
};

export default VideoBackground;