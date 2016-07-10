'use strict';

import React from 'react';
import Buffer from 'buffer';
import {AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableHighlight, ActivityIndicator} from 'react-native';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProgress: false
    }
  }
  render() {
    let errorCtrl = <View />;
    if (this.state.badCredentials) {
      errorCtrl = <Text style={styles.error}>
        That user name and password combination did not work
      </Text>;
    }
    if (this.state.unknownError) {
      errorCtrl = <Text style={styles.error}>
        We experienced an unexpected issue
      </Text>;
    }
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('image!Octocat')} />
        <Text style={styles.heading}>Github Browser</Text>
        <TextInput
          onChangeText={(text) => this.setState({username: text})}
          style={styles.input}
          placeholder="Github username" />
        <TextInput
          onChangeText={(text)=> this.setState({password: text})}
          style={styles.input}
          placeholder="Github password" secureTextEntry={true}></TextInput>
        <TouchableHighlight
          onPress={this.onLoginPressed.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>

        {errorCtrl}

        <ActivityIndicator
          animating={this.state.showProgress}
          size="large"
          style={styles.loader} />
      </View>
    );
  }
  onLoginPressed() {
    console.log('login with username ' + this.state.username)
    this.setState({showProgress: true});

    let authService = require('./AuthService');
    authService.login({
      username: this.state.username,
      password: this.state.password
    }, (results) => {
      this.setState(Object.assign({
        showProgress: false
      }, results));

      if(results.success && this.props.onLogin){
        this.props.onLogin()
      }
    })
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
  logo: {
    width: 66,
    height: 55
  },
  heading: {
    fontSize: 30,
    marginTop: 10
  },
  input: {
    height: 50,
    marginTop: 10,
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
  },
  loader: {
    marginTop: 20
  },
  error: {
    color: 'red',
    paddingTop: 10
  }
});
