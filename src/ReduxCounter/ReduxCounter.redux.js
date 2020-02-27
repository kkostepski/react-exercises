const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

const counterReducer = (state = { value: 0 }, action, initialState) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };

    default:
      return {
        ...state
      };
  }
};

export default counterReducer;
