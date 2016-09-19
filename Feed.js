'use strict';

import React from 'react';
import {Text,
  View,
  Component,
  Image,
  ListView,
  ActivityIndicator,
  TouchableHighlight
 } from 'react-native';

export default class extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    })
    this.state = {
      dataSource: ds.cloneWithRows([{
        "actor": {
          "avatar_url": "https://avatars.githubusercontent.com/u/810438?",
          "login": "gaearon"
        },
        "created_at":
"2016-09-19T13:24:23Z",
        "payload": {
          "action": "started"
        }
      }]),
      showProgress: true
    }
  }
  componentWillMount(){
    this.fetchFeed();
  }
  fetchFeed(){
    require('./AuthService').getAuthInfo((err, authInfo) => {
      var url = 'https://api.github.com/users/'
        + authInfo.user.login
        + '/received_events';

      fetch(url, {
        headers: authInfo.header
      })
      .then((response)=> response.json())
      .then((responseData)=> {
        var feedItems = responseData.filter((ev)=> ev.type == 'WatchEvent');
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(feedItems),
          showProgress: false
        });
      })
    });
  }
  pressRow(rowData){
    console.log(rowData)
  }
  renderRow(rowData){
    return (
      <TouchableHighlight
        onPress={()=> this.pressRow(rowData)}
        underlayColor='#ddd'
      >
        <View style={{
            flex: 1,
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center',
            borderColor: '#D7D7D7',
            borderBottomWidth: 1
          }}>
          <Image source={{uri: rowData.actor.avatar_url}}
            style={{
              height: 36,
              width: 36,
              borderRadius: 18
            }}
          />
          <View style={{
              paddingLeft: 20
            }}>
            <Text>{rowData.created_at}</Text>
            <Text>{rowData.actor.login}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  render() {
    if(this.state.showProgress){
      <View style={{
        flex: 1,
        justifyContent: 'center'
      }}>
        <ActivityIndicator
          animating={true}
          size="large" />
      </View>
    }
    return (
      <View style={{
        flex: 1,
        justifyContent: 'flex-start'
      }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
}
