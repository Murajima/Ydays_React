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

function onPress(that) {
  if(that.props.text != ''){
    that.props.addToList(that.props.text)
    // that.props.setTextNull()
  }
}

class TodoList extends Component {

  render() {
    return (
        <View>
          <TextInput
              style={{height: 40, width: 300}}
              placeholder="Type here to translate!"
              onChangeText={(text) => this.props.updateField(text)}
              value={this.props.text}
          />
          <Button
              title="Submit"
              onPress={() => onPress(this) }/>
          <FlatList
            data={this.props.textList}
            renderItem={({item}) => <Text>{item}</Text>}
          />
        </View>
    )
  }
}

export default TodoList;