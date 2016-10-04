/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {TextInputMask} from './lib';

class MaskedTextSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInputMask style={styles.input} type={'money'}/>
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
  input: {
		borderWidth: 1,
		borderColor: 'green',
		height: 50,
		width: 200
	}
});

AppRegistry.registerComponent('MaskedTextSample', () => MaskedTextSample);
