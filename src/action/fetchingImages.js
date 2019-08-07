// // ES Modules syntax
// import Unsplash from 'unsplash-js';
import axios from 'axios';



// // require syntax
// //const Unsplash = require('unsplash-js').default;

// const unsplash = new Unsplash({
//   applicationId: "c467f38c68a08d957a9d50be204c127e4c49cd1377c44cb96e0c22fd111417e7",
//   secret: "2230812d95ecb0b5deff426bbb2e8f38b5e7226cc491f969ee56b5b1ac411fa2"
// });

export const getImageList = () => {
  
    return (dispatch) => {
        // unsplash.photos.listPhotos(2, 15, "latest")
        // .then()
        // .then(json => {
        //   console.log("data",json)
        // });
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response =>{ 
          
        console.log("data",response.data)
        dispatch({
            type:"ImageList",
            payload: response.data
          });})
        
    };
  };
  //Jyoti Sharma