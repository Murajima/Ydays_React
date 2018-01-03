import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import TodoList from '../components/TodoList.js';

const mapStateToProps = state => ({
  text: state.textField,
  textList: state.list
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (newText) => { dispatch({ type: 'FIELD_CHANGE', text: newText })},
  addToList: (text) => { dispatch({ type: 'ADD_LIST', text: text }) },
});



export default connect(mapStateToProps, mapDispatchToProps)(TodoList)