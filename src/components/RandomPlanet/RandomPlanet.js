import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';

import './RandomPlanet.scss';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor((Math.random() * 18) + 3);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {

  const { id, population, rotationPeriod, diameter, name } = planet;
  return (
    <React.Fragment>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet"
           className="random-planet__img" />
      <div className="random-planet__wrapper planet-info">
        <h2 className="planet-info__title">{name}</h2>
        <ul className="planet-info__list">
          <li className="planet-info__item">Population {population}</li>
          <li className="planet-info__item">Rotation Period {rotationPeriod}</li>
          <li className="planet-info__item">Diameter {diameter}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};


export default RandomPlanet;
