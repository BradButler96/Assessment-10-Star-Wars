- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  - It is a series of characters used to verify that a string contains a specified pattern. The variation in character pattern relates to the verification done on the string.
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
  - It is stored in local storage using the persistedReducer.
  
- What does `combineReducers` do? Why are we using it? 
  - It turns objects whose values are different reducing functions into a single reducing function that can be passed to createStore.  

- How does the "Reset to Fresh Exploration" feature work?
  - It resets all action types to RESET_ALL which causes all payloads to be reset to {} 

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?
  - It creates an action for all discovered items, then displays only discovered ones. It will then display all items as they get discovered. 
  - This is a good design because the app will only load information as it is discovered rather than all at once and keeps the code simple and minimizes repitition.

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
  - The way the homepage is setup only requires the first film to be loaded rather than loading all films.Loading all films at once would be unnecessary since the homepage will load the first one by default. If all films were loaded it would cause all other planets and people in each film to be loaded at once too. This would cause the app to be slow.
  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?
  - Redux is beneficial in keeping code concise and simple
  - When using redux keeping all actions and reducers in their own folders helps make file management easier.
  
- Which Star Wars character would make the best React developer, and why?
  - I don't know there's too many to keep track of. 
