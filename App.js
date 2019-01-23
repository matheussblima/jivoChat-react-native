import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, WebView, Dimensions} from 'react-native';

import jivoChat from './assets/html/index_en.html';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chat}>
           {/* <WebView style={{flex: 1}} source={jivoChat} /> */}

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  chat: {
    margin: 8,
    width: width - 50,
    borderRadius: 16,
    height: height / 2,
    backgroundColor: '#F45',
    justifyContent: 'center'
  }
});
