import React, { Component } from 'react';
import './App.scss';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import ErrorButton from '../ErrorButton';
import ErrorIndicator from '../ErrorIndicator';
import ItemDetails from '../ItemDetails';
// import ItemList from '../ItemList';
// import ItemDetails from '../ItemDetails';
import SwapiService from '../../services/SwapiService';

const Row = ({left, right}) => {
  return (
    <div className='app__wrapper'>
      {left}
      {right}
    </div>
  )
};


class App extends Component {

  swapiService = new SwapiService();

  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorIndicator />
        )
    }

    const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;

    const personDetails = (
      <ItemDetails
        getImageUrl={getPersonImage}
        getData={getPerson}
        itemId={11}
      />
    );
    const starshipDetails = (
      <ItemDetails
        getImageUrl={getStarshipImage}
        itemId={5}
        getData={getStarship}
      />
    );

    return (
      <div className="app">
        <Header />
        {/*<RandomPlanet />*/}
        {/*<ErrorButton/>*/}
        {/*<PeoplePage />*/}
        <Row
          left={personDetails}
          right={starshipDetails}
        />
        {/*<div className='app__wrapper'>*/}
        {/*  <ItemList*/}
        {/*    renderItem={(item) => (<span>{item.name}</span>)}*/}
        {/*    getData={this.swapiService.getAllPlanets}*/}
        {/*    onItemSelected={this.onPersonSelected}*/}
        {/*  />*/}
        {/*  <ItemDetails personId={this.state.selectedPerson} />*/}
        {/*</div>*/}

        {/*<div className='app__wrapper'>*/}
        {/*  <ItemList*/}
        {/*    renderItem={(item) => item.name}*/}
        {/*    getData={this.swapiService.getAllStarships}*/}
        {/*    onItemSelected={this.onPersonSelected}*/}
        {/*  />*/}
        {/*  <ItemDetails personId={this.state.selectedPerson} />*/}
        {/*</div>*/}
      </div>
    )
  }
};

export default App;
