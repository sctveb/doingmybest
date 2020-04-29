import * as types from '../actions/ActionTypes';

// Initial State
const initialState = {
  color: 'black',
};

// Reducer
function color(state = initialState, action) {
  switch (action.type) {
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
}

export default color;
