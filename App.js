import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import todoList from './store/storeToDoList.js'
import store from './store/store.js'
import CounterContainer from './containers/CounterContainer.js';
import TodoListContainer from './containers/TodoListContainer.js'

export default class App extends Component {
  counterStore = createStore(store)
  todoListStore = createStore(todoList)
  render() {
    return (
      <View style={styles.container}>
        <Provider store={this.counterStore}>
          <CounterContainer/>
        </Provider>
        <Provider store={this.todoListStore}>
          <TodoListContainer/>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});