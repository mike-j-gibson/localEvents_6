import { createStore, applyMiddleware, compose  } from 'redux'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { getArtists } from './actions'
const loggerMiddleware = createLogger()


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//const store = createStore(
    //reducer,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
  ));

store.dispatch(getArtists()).then(() => {

});

export default store

