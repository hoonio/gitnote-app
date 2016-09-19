'use strict';

import React from 'react';
import {Text,
  View,
  Component,
  Image,
  ListView
 } from 'react-native';

export default class extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    })
    this.state = {
      dataSource: ds
    }
  }
  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 80,
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <Text>Hello</Text>
      </View>
    );
  }
}
