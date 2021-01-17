export default class SwapiService {
  _apiBase = "https://swapi.py4e.com/api";
  _imageBase = "https://starwars-visualguide.com/assets/img";

  getResourse = async (url) => {
    const result = await fetch(`${this._apiBase}${url}`);
    if (!result.ok) {
      throw new Error(`Could not fetch this url: ${this._apiBase}${url}.
    Status: ${result.status} `);
    }
    return await result.json();
  };

  _extractId = (item) => {
    let idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  getAllPeople = async () => {
    const result = await this.getResourse(`/people`);
    return result.results.map(this._transformPerson);
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      mass: person.mass,
      length: person.height,
      birth: person.birth_year,
    };
  };

  getPerson = async (id) => {
    const person = await this.getResourse(`/people/${id}`);
    return this._transformPerson(person);
  };

  getAllStarships = async () => {
    const result = await this.getResourse(`/starships`);
    return result.results.map(this._transformStarship);
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      length: starship.MGLT,
      mass: starship.length,
      hyperdrive: starship.hyperdrive_rating,
      speed: starship.MGLT,
      class: starship.starship_class,
    };
  };

  getStarship = async (id) => {
    const starship = await this.getResourse(`/starships/${id}`);
    return this._transformStarship(starship);
  };

  getPersonImage = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  getStarshipImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  };
}
