import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import store from './store/index.js'
import CounterContainer from './containers/CounterContainer.js'
import TodoListContainer from './containers/TodoListContainer.js'
import Counter from './components/Counter.js'
import TodoList from './components/TodoList.js'

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <CounterContainer/>
            <TodoListContainer/>
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 150
  },
});