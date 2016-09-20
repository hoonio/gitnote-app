'use strict';

import React from 'react';
import {Text, View, Image, TextInput, TouchableHighlight, StyleSheet} from 'react-native';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => this.setState({searchQuery: text})}
          style={styles.input}
          placeholder="Search query" />
        <TouchableHighlight
          onPress={this.onSearchPressed.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }
  onSearchPressed() {
    console.log('Search for ' + this.state.searchQuery)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    padding: 10
  },
  input: {
    height: 50,
    marginTop: 30,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48bbec',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  }
});
