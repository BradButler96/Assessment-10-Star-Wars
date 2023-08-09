import { LOAD_PERSON, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

// Create action for people depending on state
function people(state = INITIAL_STATE, action) {
  switch (action.type) {
    // If state is RESET_ALL set person state to empty object
    case RESET_ALL:
      return { ...INITIAL_STATE };

    // If state is LOAD_PERSON create action for given person
    case LOAD_PERSON:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default people;