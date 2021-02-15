import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerList from "./reducers/reducer";
// function loggerMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       const result = next(action);
//       console.log("Middleware", result);
//       return result;
//     };
//   };

// // }
// const loggerMiddleware = (store) => (next) => (action) => {
//   const result = next(action);
//   // console.log("Middleware", result);
//   return result;
// };
const store = createStore(reducerList, applyMiddleware(thunk));
export default store;
