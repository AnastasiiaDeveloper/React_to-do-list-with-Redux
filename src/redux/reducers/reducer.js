import {
  ADD_TASK,
  DELETE_TASK,
  SET_LOADER,
  SAVE_EDIT,
  IMPORTANT,
  LOAD_DATA,
  DONE,
} from "./../actionType";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  loader: false,
  arr: [],
};
export default function counter(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA: {
      console.log(action.data);
      return {
        ...state,
        arr: action.data.data,
      };
    }
    case ADD_TASK:
      const createObj = {
        text: action.text,
        important: false,
        id: uuidv4(),
      };
      return {
        ...state,
        arr: [createObj, ...state.arr],
      };
      break;
    case DELETE_TASK:
      const filteredArr = state.arr.filter((el) => el.id !== action.id);
      return {
        ...state,
        arr: filteredArr,
      };
      break;
    case SET_LOADER:
      {
        return {
          ...state,
          loader: action.show,
        };
      }
      break;

    case SAVE_EDIT:
      {
        const { id, text } = action;
        const updatedArr = state.arr.map((el) => {
          if (el.id === id) {
            return { ...el, text };
          }
          return el;
        });
        return {
          ...state,
          arr: updatedArr,
        };
      }
      break;

    case IMPORTANT:
      {
        const { id, important } = action;
        console.log("IMPORTANT REDUCER", id, important);
        const updatedArr = state.arr.map((el) => {
          if (el.id === id) {
            return { ...el, important: important ? false : true };
          }
          return el;
        });
        return {
          ...state,
          arr: updatedArr,
        };
      }
      break;

      case DONE:
      {
        const { id, done } = action;
        console.log("DONE REDUCER", id, done);
        const updatedArr = state.arr.map((el) => {
          if (el.id === id) {
            return { ...el, done: done ? false : true };
          }
          return el;
        });
        return {
          ...state,
          arr: updatedArr,
        };
      }
      break;

    default:
      return state;
      break;
  }
}
