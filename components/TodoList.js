import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  List,
  ListItem
} from 'react-native';

class TodoList extends Component {

  render() {
    const displayText = this.props.textList.join();

    return (
        <View>
          <TextInput
              style={{height: 40, width: 300}}
              placeholder="Type here to translate!"
              onChangeText={(text) => this.props.updateField(text)}
          />
          <Button
              title="Submit"
              onPress={() => this.props.addToList(this.props.text)}/>
          <View>
            <Text>{displayText}</Text>
          </View>
        </View>
    )
  }
}

export default TodoList;