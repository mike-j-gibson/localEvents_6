// import React, {createContext, useContext, useReducer} from 'react';
// export const StateContext = createContext();

import { DrawerLayoutAndroidComponent } from "react-native";

export const initialState = {
  user: {valid: false},
  drawerOpen: false,
  myLocations: [],
  allLocations:[],
  myArtists: [],
  allArtists: [],
  myEvents: [],
  allEvents: []
};



// export const StateProvider = ({reducers, initialState, children}) =>(
//   <StateContext.Provider value={useReducer(reducers, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

// export const getState = () => useContext(StateContext);
