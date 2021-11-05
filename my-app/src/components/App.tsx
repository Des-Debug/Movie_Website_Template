import React from 'react';
import './App.css';
import MovieHeader from '../shared/components/header/MovieHeader';
import MovieSlider from './movieSlider/MovieSlider';
import MovieCarousel from './filmCarousel/MovieCarousel';

function App() {
  return (
    <React.Fragment>
      <MovieHeader/>
      <MovieSlider/>
      <MovieCarousel/>
    </React.Fragment>
  );
}

export default App;
