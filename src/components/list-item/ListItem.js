import { useDispatch } from "react-redux";
import Loader from "../loader/loader";
import { useState } from "react";
import {
  thunkDeleteTask,
  handleImportant,
  handleDone,
} from "./../../redux/action";
import Edit from "./edit";
import "./listItem.css";

const ListIt = ({ id, text, important, done }) => {
  const [loader, setLoader] = useState(false);
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const deleteItem = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      dispatch(thunkDeleteTask(id));
    }, 1000);
  };
  const editItem = () => {
    setEdit(true);
  };

  const setImportant = () => {
    dispatch(handleImportant(id, important));
    /// dispatch set important
  };

  const setDone = () => {
    dispatch(handleDone(id, done));
    /// dispatch set done
  };

  // let btn = document.getElementById("btn");
  // btn.addEventListener("click", function() {
  //   this.classList.add("active");
  // });

  return (
    <p>
      {loader ? (
        <Loader />
      ) : (
        <>
          {edit ? (
            <Edit text={text} id={id} setEdit={setEdit} />
          ) : (
            <>
              <button
                className={important ? "switchButton active" : "switchButton"}
                onClick={setImportant}
              >
                {important ? "importnat" : "not important"}
              </button>
              <button  onClick={setDone}>
                {done ? "done" : "not done"}
              </button>
             <p className={done ? "switchButton2 active2" : "switchButton2"}>{text}</p> 
              <button className="redButton" onClick={deleteItem}>
                Delete
              </button>
              <button className="redButton" onClick={editItem}>
                edit
              </button>
            </>
          )}
        </>
      )}
    </p>
  );
};
export default ListIt;
