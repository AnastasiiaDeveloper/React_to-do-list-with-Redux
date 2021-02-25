import { useEffect } from "react";
import { useSelector } from "react-redux";
import ListIt from "../list-item/ListItem";
import Loader from "../loader/loader";
const List = () => {
  const arr = useSelector((store) => store.reducer.arr);
  const loaderState = useSelector((state) => state.loader);
  const list = arr.map(({ text, id, important }) => (
    // <p key={idx}>{el.text}</p>
    <ListIt id={id} key={id} text={text} important={important} />
  ));
  useEffect(() => {
    console.log("component list", arr);
  }, [arr]);
  return (
    <div>
      {loaderState ? <Loader /> : null}
      {list}
    </div>
  );
};
export default List;
