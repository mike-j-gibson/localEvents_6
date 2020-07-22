import 'react-native-gesture-handler';//THIS HAS TO BE HERE

// import { Provider } from 'react-redux';
// import store from './redux/store'
import {Navigation} from './App/Navigation'
import React, { useEffect, useState } from 'react'
import timerSvc from './App/services/timer-svc'
import { firebase } from './App/firebase/config'
import {AllArtistsNoNav}  from './App/screens/AllArtistsNoNav/AllArtists'

//------REACT HOOKS for State
import { initialState } from './App/reactHooks/initialState';
import { reducers } from './App/reactHooks/reducers';
import { StateProvider } from './App/reactHooks/state';

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => 
  {
    let mounted = true;
    timerSvc();
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
    return () => mounted = false;
  }, []);

  if (loading) {
    return (
      <></>
    )
  }

  return (
    // <AllArtistsNoNav/>
    <StateProvider >
      {/* <Provider store={store}> */}
        <Navigation/>
      {/* </Provider> */}
    </StateProvider>

  );
}
