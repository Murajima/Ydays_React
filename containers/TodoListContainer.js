import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList.js';

const mapStateToProps = ({ todoListReducer }) => ({
  text: todoListReducer.textField,
  textList: todoListReducer.list
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (newText) => { dispatch({ type: 'FIELD_CHANGE', text: newText })},
  addToList: (text) => { dispatch({ type: 'ADD_LIST', text: text }) },
  setTextNull: () => { dispatch({type: 'REMOVE_TEXT'})},
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)