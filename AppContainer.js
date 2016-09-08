'use strict';

import React from 'react';
import Buffer from 'buffer';
import {Text, View, Component, StyleSheet } from 'react-native';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Tabs coming soon</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
