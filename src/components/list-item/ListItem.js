import { useDispatch } from "react-redux";
import Loader from "../loader/loader";
import { useState } from "react";
import { deleteTask, importantSlice } from "../../reduxToolkit/toolkitReducer";
import Edit from "./edit";

const ListIt = ({ id, text, important }) => {
  const [loader, setLoader] = useState(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const deleteItem = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      dispatch(deleteTask(id));
      // payload === id


      // dispatch(deleteTask({id}));
    
    }, 1000);
  };
  const editItem = () => {
    setEdit(true);
  };
  const setImportant = () => {
    dispatch(importantSlice({ id, important }));
    // payload.id or payload.important
    /// dispatch set important
  };
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
              <button onClick={setImportant}>
                {important ? "importnat" : "not important"}
              </button>
              {text}
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
