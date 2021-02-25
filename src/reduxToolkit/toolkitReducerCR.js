import { createAction, createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// const initialState = {
//   count: 0,
// };

const initialState = {
  loader: false,
  arr: [],
};

// export const increment = createAction("INCREMENT");
// export const decrement = createAction("DECREMENT");
// export const number = createAction("ADD_NUMBER", (number) => {
//   return {
//     payload: {
//       number,
//     },
//   };
// });

// export const addTask = (text) => {
//   return {
//     type: ADD_TASK,
//     text,
//   };
// };

export const addTask = createAction("ADD_TASK", function prepare(text) {
  return {
    payload: {
      text,
    },
  };
});

// export const deleteTask = (id) => {
//   return {
//     type: DELETE_TASK,
//     id,
//   };
// };

export const deleteTask = createAction("DELETE_TASK", function prepare(id) {
  return {
    payload: {
      id,
    },
  };
});

// export const setLoader = (show) => {
//   return {
//     type: SET_LOADER,
//     show,
//   };
// };

export const setLoader = createAction("SET_lOADER", function prepare(show) {
  return {
    payload: {
      show,
    },
  };
});

// export const saveEdit = (text, id) => {
//   return {
//     type: SAVE_EDIT,
//     text,
//     id,
//   };
// };

export const saveEdit = createAction("SAVE_EDIT", function prepare(text, id) {
  return {
    payload: {
      text,
      id,
    },
  };
});

// export const handleImportant = (id, important) => {
//   return {
//     type: IMPORTANT,
//     important,
//     id,
//   };
// };

export const іmportant = createAction(
  "IMPORTANT",
  function prepare(important, id) {
    return {
      payload: {
        important,
        id,
      },
    };
  }
);

// export const loadDataAction = (data) => {
//   return {
//      type: LOAD_DATA,
//       data
//      };
// };

export const loadData = createAction("LOAD_DATA", function prepare(data) {
  return {
    payload: {
      data,
    },
  };
});

// export default createReducer(initialState, {
//   [increment.type]: (state) => {
//     state.count = state.count + 1;
//   },
//   [decrement.type]: (state) => {
//     state.count = state.count - 1;
//   },
//   [number]: (state, action) => {
//     state.count = state.count - action.payload.number;
//     console.log(action.payload.number);
//   },
// });

const reducer = createReducer(initialState, {
  //   [loadData]: function (state, action) {
  //     console.log(action.data);
  //     return {
  //       ...state,
  //       arr: action.data.data,
  //     };
  //   },
  [loadData]: (state, action) => {
    state.arr = action.payload.data.data;
  },

  // [addTask]: function (state, action) {
  //   const createObj = {
  //     text: action.text,
  //     important: false,
  //     id: uuidv4(),
  //   };
  //   return {
  //     ...state,
  //     arr: [createObj, ...state.arr],
  //   };
  // },

  [addTask]: function (state, action) {
    // console.log(action);
    const createObj = {
      text: action.payload.text,
      important: false,
      id: uuidv4(),
    };
    // state.arr = [createObj, ...state.arr],
    state.arr.push(createObj);
  },

  [deleteTask]: function (state, action) {
    const filteredArr = state.arr.filter((el) => el.id !== action.id);

    state.arr = filteredArr;
  },

  [setLoader]: function (state, action) {
    state.loader = action.payload.show;
  },

  [saveEdit]: function (state, action) {
    console.log(action);
    const { id, text } = action.payload;
    const updatedArr = state.arr.map((el) => {
      if (el.id === id) {
        return { ...el, text };
      }
      return el;
    });
    state.arr = updatedArr;
  },

  [іmportant]: function (state, action) {
    const { id, important } = action.payload;
    console.log("IMPORTANT REDUCER", id, important);
    const updatedArr = state.arr.map((el) => {
      if (el.id === id) {
        return { ...el, important: important ? false : true };
      }
      return el;
    });

    state.arr = updatedArr;
  },
});
export default reducer;
