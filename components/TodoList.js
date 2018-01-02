import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

class TodoList extends Component {
  render() {
    return (
      <View>
          <TextInput
              style={{height: 40, width: 300}}
              placeholder="Type here to translate!"
              onChangeText={(text) => this.props.addToList(text)}
          />
          <Button
              title="Submit"
              onPress={this.props.addToList}/>
          <View>
            <Text>Value: {this.props.text.toString()}</Text>
          </View>
        </View>
    )
  }
}

export default TodoList;