import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialState } from './initialState';
import { reducers } from './reducers';

export const StateContext = createContext();

export const StateProvider = props => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};

export const getState = () => useContext(StateContext);


