import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveEdit } from "./../../redux/action";

const Edit = ({ text, id, setEdit }) => {
  const [editText, setEditText] = useState(text);
  const dispatch = useDispatch();

  const saveItem = () => {
    setEdit(false);
    dispatch(saveEdit(editText,id));
  };
  return (
    <div>
      <input
        type="text"
        value={editText}
        onChange={(e) => {
          setEditText(e.target.value);
        }}
      />
      <button className="redButton" onClick={saveItem}>
        save
      </button>
    </div>
  );
};
export default Edit;
