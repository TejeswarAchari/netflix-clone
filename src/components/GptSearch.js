import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMAGE_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='absolute w-screen -z-20'>
         <img src={BG_IMAGE_URL}/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
      
    </div>
  )
}

export default GptSearch
