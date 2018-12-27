import React, { Component } from 'react';
import { Text, AppRegistry, Button, StyleSheet, View } from 'react-native';
import Ball from './models/ball.js';
import Stick from './models/stick.js';

export default class HitTheBall extends Component {
       
       daf(){
        return (
          <View style={styles.container}>
          <Ball position={this.state}></Ball>      
          <Stick position={styles.rectangle}></Stick>
           </View>
            );
    }

 constructor(props) {
  super(props);
  this.state = { styles : { top: 0, left: 40 }, direction : 1 };
    }
    
  render() {
    return (
      this.daf()
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
rectangle: {
    top: 10,
    left: 40,
    width: 300,
    height: 10,
    backgroundColor: 'black',
  transform: [{ rotate: '20deg'}],
}
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('HitTheBall', () => HitTheBall);