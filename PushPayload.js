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
        <Image source={{uri: this.props.pushEvent.actor.avatar_url}}
          style={{
            height: 120,
            width: 120,
            borderRadius: 60
          }} />
        <Text style={{
            paddingTop: 20,
            paddingBottom: 20,
            fontSize: 20
          }}>
          {this.props.pushEvent.created_at}
        </Text>
        <Text>{this.props.pushEvent.actor.login}</Text>
      </View>
    );
  }
}
