import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
// actions === { addBlogPost: (dispatch) => { return ()=> {}}}

    const boundActions = {};
    // This iterations over the actions. Finds the bound actions that match the key and calls the function inside of it.
    for( let key in actions){
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...boundActions}}>
      {children}
    </Context.Provider>
  };
  return { Context, Provider }
}