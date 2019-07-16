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
      case ERROR:
        return{
          ...state,
          error:action.payload
        }
    default:
      return state;
  }
};
