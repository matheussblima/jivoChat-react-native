import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, WebView, Dimensions, Button, Animated} from 'react-native';

import jivoChat from './assets/html/index_en.html';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
 state = { 
   scaleViewChatWidth: new Animated.Value(0),
   scaleViewChatHeight: new Animated.Value(0),
   chatIsOpen: false
}
  
  componentDidMount() {

  }

  openChat = () => {
    Animated.parallel([
      Animated.timing(this.state.scaleViewChatWidth, {
        toValue: width - 50,
        duration: 500
      }),
      Animated.timing(this.state.scaleViewChatHeight, {
        toValue: height / 2,
        duration: 500
      })
    ]).start();

    this.setState({
      chatIsOpen: true,
    });
  }

  closeChat = () => {
    
    Animated.parallel([
      Animated.timing(this.state.scaleViewChatWidth, {
        toValue: 0,
        duration: 500
      }),
      Animated.timing(this.state.scaleViewChatHeight, {
        toValue: 0,
        duration: 500
      })
    ]).start();

    this.setState({
      chatIsOpen: false,
    });
  }

  onPressChat = () => {
    const { chatIsOpen } = this.state;
    if(chatIsOpen) {
      this.closeChat();
    } else {
      this.openChat();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{ width: this.state.scaleViewChatWidth, height: this.state.scaleViewChatHeight, padding: 0, margin: 0 }}>
          <View style={[styles.chat]}>
            <WebView style={{flex: 1, margin: 8}} source={jivoChat} />
          </View>
        </Animated.View>
          <Button style={styles.button} title="Chat" onPress={() => this.onPressChat()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 16,
  },
  chat: {
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
    marginBottom: 16,
    backgroundColor: '#FFF',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowColor: "#000",
    shadowRadius: 16,
    elevation: 2,
  },
  button: {
    marginTop: 20,
  }
});
