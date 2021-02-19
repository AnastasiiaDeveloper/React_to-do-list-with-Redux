import axios from "axios";
import {
  ADD_TASK,
  DELETE_TASK,
  SET_LOADER,
  SAVE_EDIT,
  IMPORTANT,
  DONE,
  LOAD_DATA,
} from "./actionType";

// export const addTask = (text) => {
//   return {
//     type: ADD_TASK,
//     text,
//   };
// };

// export const deleteTask = (id) => {
//   return {
//     type: DELETE_TASK,
//     id,
//   };
// };

export const setLoader = (show) => {
  return {
    type: SET_LOADER,
    show,
  };
};

export const saveEdit = (text, id) => {
  return {
    type: SAVE_EDIT,
    text,
    id,
  };
};

export const handleImportant = (id, important) => {
  return {
    type: IMPORTANT,
    important,
    id,
  };
};

export const handleDone = (id, done) => {
  return {
    type: DONE,
    done,
    id,
  };
};

export const loadDataAction = (data) => {
  return { type: LOAD_DATA, data };
};
export const thunkLoadData = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get("http://localhost:3004/list");
      dispatch(loadDataAction(data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const thunkDeleteTask = (id) => {
  return async (dispatch) => {
    console.log(id);
    await axios.delete(`http://localhost:3004/list/${id}`);
    dispatch(thunkLoadData());
  };
};

export const thunkAddTask = (text) => {
  return async (dispatch) => {
    console.log(text);
    await axios.post("http://localhost:3004/list", {
      important: false,
      text,
    });
    dispatch(thunkLoadData());
  };
};
