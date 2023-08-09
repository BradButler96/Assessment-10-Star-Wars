import axios from "axios";
import { LOAD_PLANET } from "./types";


function getPlanetFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    let {
      name,
      population,
      climate,
      residents,
      films
    } = res.data;

    // Map each array of URLs to get rid of base URL and only contain the numerical variation at the end for each respective URL
    residents = residents.map(url => url.match(/\d+/)[0]);
    films = films.map(url => url.match(/\d+/)[0]);

    // Create object for action creator
    const planet = { id, name, population, climate, residents, films };
    // Create action
    dispatch(gotPlanet(planet));
  };
}

// Action creator
function gotPlanet(planet) {
  return { type: LOAD_PLANET, payload: planet };
}


export { getPlanetFromAPI }