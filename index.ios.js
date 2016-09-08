import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import Login from './Login';
import AuthService from './AuthService';
import AppContainer from './AppContainer';

class githubBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      checkingAuth: true
    }
  }
  onLogin() {
    this.setState({isLoggedIn: true});
  }
  componentDidMount() {
    AuthService.getAuthInfo((err, authInfo) => {
      this.setState({
        checkingAuth: false,
        isLoggedIn: authInfo != null
      })
    })
  }
  render() {
    if(this.state.checkingAuth){
      return (
        <View style={styles.container}>
          <ActivityIndicator animating={true} size="large" style={styles.loader} />
        </View>
      )
    }

    if(this.state.isLoggedIn){
      return (
        <AppContainer />
      )
    }
    else{
      return (
        <Login onLogin={this.onLogin.bind(this)}/>
      );
    }
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('githubBrowser', () => githubBrowser);
