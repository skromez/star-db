import axios from 'axios';

export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  async axiosFunc(url) {
    const res = await axios.get(`${this._apiBase}${url}`);
    return res.data
  }

  async getAllPeople() {
    const res = await this.axiosFunc(`/people/`);
    return res.results.map(this._transformPerson)
  }

  async getPerson(id) {
    const person = await this.axiosFunc(`/people/${id}/`);
    return this._transformPerson(person)
  }

  async getAllPlanets() {
    const res = await this.axiosFunc(`/planets/`);
    return res.results.map(this._transformPlanet)
  }

  async getPlanet(id) {
    const planet = await this.axiosFunc(`/planets/${id}/`)
    return this._transformPlanet(planet)
  }

  async getAllStarships() {
    const res = await this.axiosFunc(`/starships/`);
    return res.results.map(this._transformStartship)
  }

  async getStarship(id) {
    const startship = await this.axiosFunc(`/starships/${id}/`);
    return this._transformStartship(startship)
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period,
    }
  }

  _transformStartship(starship) {
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
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }
}

const swapi = new SwapiService();

