import { useSelector } from "react-redux";
import ListIt from "../list-item/ListItem";
import Loader from "../loader/loader";
const List = () => {
  const arr = useSelector((store) => store.arr);
  const loaderState = useSelector((state) => state.loader);

  const list = arr.map(({ text, id, important, done }) => (
    // <p key={idx}>{el.text}</p>
    <ListIt id={id} key={id} text={text} important={important} done={done} />
  ));
  return (
    <div>
      {loaderState ? <Loader /> : null}
      {list}
    </div>
  );
};
export default List;
