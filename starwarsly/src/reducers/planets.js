import { LOAD_PLANET, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

// Create action for planet depending on state
function planets(state = INITIAL_STATE, action) {
  switch (action.type) {
    // If state is RESET_ALL set planet state to empty object
    case RESET_ALL:
      return { ...INITIAL_STATE };

    // If state is LOAD_PLANET create action for given planet
    case LOAD_PLANET:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default planets;