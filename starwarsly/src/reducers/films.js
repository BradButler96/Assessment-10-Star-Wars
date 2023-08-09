import { LOAD_FILM, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

// Create action for film depending on state
function films(state = INITIAL_STATE, action) {
  switch (action.type) {
    // If state is RESET_ALL set film state to empty object
    case RESET_ALL:
      return { ...INITIAL_STATE };

    // If state is LOAD_FILM create action for given film
    case LOAD_FILM:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default films;