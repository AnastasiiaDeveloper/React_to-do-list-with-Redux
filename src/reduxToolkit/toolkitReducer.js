import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");
export const number = createAction("ADD_NUMBER", (number) => {
  return {
    payload: {
      number,
    },
  };
});

export default createReducer(initialState, {
  [increment.type]: (state) => {
    state.count = state.count + 1;
  },
  [decrement.type]: (state) => {
    state.count = state.count - 1;
  },
  [number]: (state, action) => {
    state.count = state.count - action.payload.number;
    console.log(action.payload.number);
  },
});
