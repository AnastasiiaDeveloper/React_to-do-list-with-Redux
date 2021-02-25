import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, fetchUserById } from "../../reduxToolkit/toolkitReducer";

const Input = () => {
  const [valueText, setValueText] = useState("");

  const dispatch = useDispatch();
  const sendData = () => {
    // dispatch(setLoader(true));
    // setTimeout(() => {
    dispatch(addTask({ text: valueText, a: "hello" }));
    // dispatch(setLoader(false));
    // }, 2 * 1000);
  };
  return (
    <div>
      <input
        type="text"
        value={valueText}
        onChange={(e) => setValueText(e.target.value)}
      />
      <button onClick={sendData}>add</button>
      <button
        onClick={() => {
          dispatch(fetchUserById());
        }}
      >
        thunk
      </button>
    </div>
  );
};
export default Input;
