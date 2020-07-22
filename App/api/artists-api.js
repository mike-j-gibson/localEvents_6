import { firebase } from '../firebase/config'

//-------------------------------------------------------------
// let doc = firebase.collection('artists');

// let observer = doc.onSnapshot(docSnapshot => {
//   // ...
// }, err => {
// });

//-------------------------------------------------------------

const addArtist = (artist) => 
{
    db.collection("artist").add(artist)
    .then(function(docRef) {
        // db.collection("users").get()
        //   .then((querySnapshot) => {
        //       querySnapshot.forEach((doc) => {
        //       });
        //   })
        //   .catch(function(error) {
        //     console.error("Error adding document: ", error);
        //   });
      })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
};

const getArtists = () => 
{
  const artistsRef = firebase.firestore().collection('artists');
  let p = artistsRef.get();
  p.then(
        result => { 
          result.docs.map(doc => doc.data());
          // console.log(result);
        },
        err => err
    );
    return p;



    // .then((response) => {
    //   console.log(response.data())
    //   return response.data;
    // })
    // .catch((error) => {
    //   // setLoading(false)
    // });



  // console.log("Get artists__________________________________");

  // let p = firebase.collection("artist").get()
  //     p.then(
  //       result => result.data,
  //       err => err
  //   );
  //   return p;

    // .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //     return querySnapshot;
    //     });
    // })
    // .catch(function(error) {
    //   console.error("Error getting artists: ", error);
    // });
    // let p = axios.get(`https://jsonplaceholder.typicode.com/posts`, { charset: "utf-8" });
    // p.then(
    //     result => result.data,
    //     err => err
    // );
    // return p;
};
  
const artistsApi = {
    getArtists,
    addArtist,
};

export default artistsApi;