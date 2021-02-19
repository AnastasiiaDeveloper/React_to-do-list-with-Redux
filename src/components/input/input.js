import { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkAddTask, setLoader } from "./../../redux/action";


const Input = () => {
  const [valueText, setValueText] = useState("");

  const dispatch = useDispatch();
  const sendData = () => {
    dispatch(setLoader(true));
    setTimeout(() => {
      dispatch(thunkAddTask(valueText));
      dispatch(setLoader(false));
    }, 2 * 1000);
  };
  return (
    <div>
      <input
        type="text"
        value={valueText}
        onChange={(e) => setValueText(e.target.value)}
      />
      <button onClick={sendData}>add</button>
    </div>
  );
};
export default Input;
