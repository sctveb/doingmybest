import * as types from '../actions/ActionTypes';

// Initial State
const initialState = {
  number: 0,
};

// Reducer
function number(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default number;
