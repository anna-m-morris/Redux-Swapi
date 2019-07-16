import {FETCH, SUCCESS,ERROR} from "../actions/index"

const initialState = {
  characters: [],
  fetching: Boolean,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return{
        ...state,
        fetching:true
      }
    case SUCCESS:
      return{
        ...state,
        fetching:false,
        characters:action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
