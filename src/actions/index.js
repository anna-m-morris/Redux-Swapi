import axios from 'axios';

export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const getCharacter = () => dispatch => {
  axios
    .get('https://swapi.co/api/people/')
    .then(({ data }) => {
      dispatch({ type: FETCH, payload: data.results });
    })
    .catch(error => {
      dispatch({ type: FETCH, payload: error });
    });
};
