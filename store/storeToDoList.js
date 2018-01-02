const INITIAL_STATE = {
  text: ''
};

export default todoList = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};