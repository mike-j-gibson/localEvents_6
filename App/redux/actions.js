// import artistsApi from '../api/artists-api'
import { firebase } from '../firebase/config'

// Action Types

export const ADD_ARTIST = 'ADD_ARTIST'
export const DELETE_NOTE = 'DELETE_NOTE'
export const GET_ARTISTS = 'GET_ARTISTS'
// Action Creators

export function addArtist(artist) {
  return {
    type: ADD_ARTIST,
    artist
  }
}

// export function getArtists() {
//     return {
//       type: GET_ARTISTS
//     }
//   }

  export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS'

  function receiveArtists(artists) {
    return {
      type: RECEIVE_ARTISTS,
      artists 
    }
  }
  
export function deletenote(id) {
  return {
    type: DELETE_NOTE,
    payload: id
  }
}

export function getArtists()
{
    return function (dispatch) 
    {
        //   //dispatch(requestArtists(subreddit))
    
        //   // The function called by the thunk middleware can return a value,
        //   // that is passed on as the return value of the dispatch method.
    
        //   // In this case, we return a promise to wait for.
        //   // This is not required by thunk middleware, but it is convenient for us.
    
        //   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        const artistsRef = firebase.firestore().collection('artist');
        return (
            artistsRef.get().then((querySnapshot) => 
            {
                const tempDocs = querySnapshot.docs.map((doc) => 
                {
                  return { id: doc.id, ...doc.data() }
                })
                // console.log(tempDocs)
                dispatch(receiveArtists(tempDocs))
            })
        )
    }
    //   return artistsApi.getArtists()

    
            //         artistsRef.get()
    //         .then(response => { 
    //                 console.log('doc:....,,,,,,,,,,,,.');

    //                 response.forEach(doc => {
    //                 const entity = doc.data()
    //                 console.log('doc:.....' + entity);
    //             })})
    //             // return response.docs.map(doc => doc.data())})
    //         .then(artists =>  dispatch(receiveArtists(artists)))
    //     )
    // //   return artistsApi.getArtists()
    //     .then(artists =>
    //       dispatch(receiveArtists(artists))
    //     )
    //}
}
