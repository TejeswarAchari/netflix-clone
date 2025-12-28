import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useHorrorMovies from '../hooks/useHorrorMovies';
import GptSearch from './GptSearch';
import MovieModal from './MovieModal';
import Shimmer from './Shimmer'; // Import Shimmer
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  useHorrorMovies();

  return (
    <div>
      <Header />
      <MovieModal />
      
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
           {/* If movies are not loaded yet, show Shimmer. Otherwise, show content. */}
           {!nowPlayingMovies ? (
              <Shimmer /> 
           ) : (
              <>
                <MainContainer />
                <SecondaryContainer />
              </>
           )}
        </>
      )}
    </div>
  );
}

export default Browse;