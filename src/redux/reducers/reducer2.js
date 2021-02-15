const initialState = {
  counter: 0,
};
export default function counter2(state = initialState, action) {
  switch (action.type) {
    case "ADD2":
      return {
        counter: state.counter + 1,
      };
      break;

    default:
      return state;
      break;
  }
}
