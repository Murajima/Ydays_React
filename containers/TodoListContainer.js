import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import TodoList from '../components/TodoList.js';

const mapStateToProps = state => ({
  text: state.text
});

const mapDispatchToProps = (dispatch) => ({
  addToList: (newText) => { dispatch({ type: 'ADD_LIST', text: newText }) },
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)