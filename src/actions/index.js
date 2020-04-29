import * as types from './ActionTypes';

// Action Creator
export const increment = () => ({
  type: types.INCREMENT,
});

export const decrement = () => ({
  type: types.DECREMENT,
});

export const setColor = (color) => ({
  type: types.SET_COLOR,
  color,
});
