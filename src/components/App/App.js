import React from 'react';
import './App.scss';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

const App = () => {
  return (
    <div className="app">
      <Header />
      <RandomPlanet />
      <div className='app__wrapper'>
        <ItemList />
        <PersonDetails />
      </div>
    </div>
  )
};

export default App;