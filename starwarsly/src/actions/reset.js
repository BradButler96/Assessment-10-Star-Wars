import { RESET_ALL } from "./types";

// Clear all actions that have been explored
function resetAll() {
  return { type: RESET_ALL }
}


export { resetAll }