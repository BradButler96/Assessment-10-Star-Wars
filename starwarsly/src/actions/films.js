import axios from 'axios';
import { LOAD_FILM } from "./types";

// Get all film data for the provided API
function getFilmFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/films/${id}/`);
    let {
      title: name,
      director,
      opening_crawl: openingCrawl,
      characters,
      planets
    } = res.data;

    // Map each array of URLs to get rid of base URL and only contain the numerical variation at the end for each respective URL
    characters = characters.map(url => url.match(/\d+/)[0]);
    planets = planets.map(url => url.match(/\d+/)[0]);

    // Create object for action creator
    const film = { id, name, director, openingCrawl, characters, planets };
    // Create action
    dispatch(gotFilm(film));
  };
}

// Action creator
function gotFilm(film) {
  return { type: LOAD_FILM, payload: film };
}


export { getFilmFromAPI }