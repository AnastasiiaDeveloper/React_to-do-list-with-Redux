import "./App.css";
import Input from "./components/input/input";
import List from "./components/list/list";
import { useEffect } from "react";
import axios from "axios";
import { thunkLoadData } from "./redux/action";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkLoadData());
  }, []);
  return (
    <div className="App">
      <Input />
      <List />
    </div>
  );
};

export default App;
