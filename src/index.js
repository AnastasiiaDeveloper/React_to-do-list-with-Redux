import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import store from "./redux/rootReducer";
import storeToolkit from "./reduxToolkit/rootToolkit";
// import { decrement, increment, number } from "./reduxToolkit/toolkitReducer";
import { Provider, useDispatch, useSelector } from "react-redux";

// const App = () => {
//   const state = useSelector((state) => state.toolkit);
//   console.log(state);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <p>{state.count}</p>
//       <button
//         onClick={() => {
//           dispatch(increment());
//         }}
//       >
//         +
//       </button>
//       <button
//         onClick={() => {
//           dispatch(decrement());
//         }}
//       >
//         -
//       </button>
//       <button
//         onClick={() => {
//           dispatch(number(50));
//         }}
//       >
//         +50
//       </button>
//     </div>
//   );
// };
const app = (
  <Provider store={storeToolkit}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
