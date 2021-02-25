import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

// обычная санка
export const a = () => {
  return async(dispatch)=>{
      dispatch(setLoader)
  }
}


export const fetchUserById = createAsyncThunk(
  "toolkitTodo/fetchByIdStatus",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
);

const counterSlice = createSlice({
  name: "toolkitTodo",
  initialState: {
    loader: false,
    arr: [],
  },

  reducers: {
    addTask(state, action) {
      const createObj = {
        text: action.payload.text,
        important: false,
        id: uuidv4(),
      };
      // state.arr = [createObj, ...state.arr],
      state.arr.push(createObj);
    },

    deleteTask(state, action) {
      const filteredArr = state.arr.filter((el) => el.id !== action.payload);

      state.arr = filteredArr;
    },

    setLoader(state, action) {
      state.loader = action.payload.show;
    },

    saveEdit(state, action) {
      const { id, text } = action.payload;
      const updatedArr = state.arr.map((el) => {
        if (el.id === id) {
          return { ...el, text };
        }
        return el;
      });
      state.arr = updatedArr;
    },

    importantSlice(state, action) {
      const { id, important } = action.payload;
      console.log("IMPORTANT REDUCER", id, important);
      const updatedArr = state.arr.map((el) => {
        if (el.id === id) {
          return { ...el, important: important ? false : true };
        }
        return el;
      });

      state.arr = updatedArr;
      // console.log(action.payload);
    },
  },
  extraReducers: {
    [fetchUserById.pending]: (state, action) => {
      // state.arr = 1
      console.log("error");
    },
    [fetchUserById.fulfilled]: (state, action) => {
      // state.arr = 1
      console.log(action.payload);
    },
    [fetchUserById.rejected]: (state, action) => {
      // state.arr = 1
      console.log("error");
    },
  },
});

export const {
  addTask,
  deleteTask,
  setLoader,
  saveEdit,
  importantSlice,
} = counterSlice.actions;

export default counterSlice;
