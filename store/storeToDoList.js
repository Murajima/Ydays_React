const INITIAL_STATE = {
  textField: '',
  list: []
};

export default todoList = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case 'FIELD_CHANGE':
      return {
        ...state,
        textField: action.text
      };
    case 'ADD_LIST':
      return {
        textField: '',
        list: [...state.list, action.text]
      };
    default:
      return state;
  }
};