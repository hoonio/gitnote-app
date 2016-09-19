'use strict';

import React from 'react';
import {Text, View, Component,
  ListView
 } from 'react-native';

export default class extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    })
    this.state = {
      dataSource: ds.cloneWithRows(['a','b','c'])
    }
  }
  componentDidMount(){
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
          dataSource: this.state.dataSource.cloneWithRows(feedItems)
        });
      })
    });
  }
  renderRow(rowData){
    return <Text style={{
        color:'#333',
        backgroundColor:'#FFF',
        alignSelf:'center'
      }}
      key={rowData.id}>
      {rowData}
    </Text>
  }
  render() {
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
