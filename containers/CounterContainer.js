import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter.js';

const mapStateToProps = ({counterReducer}) => ({
  count: counterReducer
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({ type: 'INCREMENT' }) },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)