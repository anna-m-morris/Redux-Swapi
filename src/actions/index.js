import axios from 'axios';

export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const getCharacter = () => dispatch => {
  dispatch({
    type:FETCH
  })
  axios
    .get('https://swapi.co/api/people/')
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data.results });
    })
    .catch((error) => {
      console.log("error",error)
      dispatch({ type: ERROR});
    });
};
