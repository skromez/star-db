import axios from 'axios';

export default class SwapiService {

  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  axiosFunc = async (url) => {
    const res = await axios.get(`${this._apiBase}${url}`);
    return res.data
  };

  getAllPeople = async () => {
    const res = await this.axiosFunc(`/people/`);
    return res.results.map(this._transformPerson)
  };

  getPerson = async (id) =>  {
    const person = await this.axiosFunc(`/people/${id}/`);
    return this._transformPerson(person)
  };

  getAllPlanets = async () => {
    const res = await this.axiosFunc(`/planets/`);
    return res.results.map(this._transformPlanet)
  };

  getPlanet = async (id) =>  {
    const planet = await this.axiosFunc(`/planets/${id}/`)
    return this._transformPlanet(planet)
  };

  getAllStarships = async () => {
    const res = await this.axiosFunc(`/starships/`);
    return res.results.map(this._transformStartship)
  };

  getStarship = async (id) =>  {
    const startship = await this.axiosFunc(`/starships/${id}/`);
    return this._transformStartship(startship)
  };

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  };

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period,
    }
  };

  _transformStartship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passangers: starship.passangers,
      cargoCapacity: starship.cargoCapacity
    }
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person['birth_year'],
      eyeColor: person['eye_color']
    }
  };
}
