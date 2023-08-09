import axios from "axios";
import { LOAD_PERSON } from "./types";


function getPersonFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    let {
      name,
      gender,
      birth_year: birthYear,
      homeworld,
      films
    } = res.data;

    // Map each array of URLs to get rid of base URL and only contain the numerical variation at the end for each respective URL
    films = films.map(url => url.match(/\d+/)[0]);
    homeworld = homeworld.match(/\d+/)[0];

    // Create object for action creator
    const person = { id, name, gender, birthYear, homeworld, films };
    // Create action
    dispatch(gotPerson(person));
  };
}

// Action creator
function gotPerson(person) {
  return { type: LOAD_PERSON, payload: person };
}


export { getPersonFromAPI }