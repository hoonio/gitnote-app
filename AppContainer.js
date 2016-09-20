'use strict';

import React from 'react';
import Buffer from 'buffer';
import {Text, View, Component, StyleSheet,
  TabBarIOS, NavigatorIOS
} from 'react-native';

import Feed from './Feed';
import Search from './Search';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'feed'
    }
  }
  render() {
    return (
      <TabBarIOS style={styles.container}>
        <TabBarIOS.Item
          title="Feed"
          selected={this.state.selectedTab == 'feed'}
          icon={require('image!inbox')}
          onPress={()=> this.setState({selectedTab: 'feed'})}
        >
          <NavigatorIOS style={{
              flex:1
            }}
            initialRoute={{
              component: Feed,
              title: 'Feed'
            }}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Search"
          selected={this.state.selectedTab == 'search'}
          icon={require('image!search')}
          onPress={()=> this.setState({selectedTab: 'search'})}
        >
          <NavigatorIOS style={{
              flex:1
            }}
            initialRoute={{
              component: Search,
              title: 'Search'
            }}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
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
    margin: 50,
  },
});
