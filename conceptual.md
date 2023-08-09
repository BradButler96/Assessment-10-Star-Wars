### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
	- It is a state management tool. It is useful for managing state in a central location.

- What are three features of the Redux developer tool in Chrome?
	- View action history, dispatch actions, time travel debugging

- What is a store?
	- It's where all application states are stored.

- What is a reducer?
	- Pure functions that contain the logic and calculations needed to be performed on the state

- What is an action?
	- A plain JavaScript object containing a type and information

- What is an action creator?
	- A function that creates the action object 

- How does data flow in a React/Redux application?
	- Component > action creator > action > root reducer > all reducers

- What is the purpose of the `<Provider>` component?
	- It makes the redux store available to nested components that need to access the redux store

- What is the purpose of the `useSelector` hook? What does it return?
	- It's how the state of a component is extracted from the redux store

- Describe the `useDispatch` hook. What do you use it for?
	- It is used to dispatch an action to the redux store by giving the action as an argument to the dispatch variable.

- What is redux-thunk and why would you use it?
	- It is an action creator that returns a function instead of an action. It is useful for incorporating more complex logic into action functions instead of simple updates by dispatching actions.

- What are propTypes?
	- It is a way of declaring the type of prop that is being input into a component. If a component receives the incorrect type of prop it can cause bugs in the app.

- Describe the `useCallback` hook.  What is it used for?
	- It prevents a component from rerendering unless the value has been changed.

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
	- They both allow for complex state management through actions and reducers. 
	- Redux allows for better handling of complex state management.
	- useReducer is able to manage state within a single component, while redux is for managing state in the entire application