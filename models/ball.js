import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View } from 'react-native';



export default class Ball extends Component{

	constructor(props) {
		    super(props);
		    this.state = props.position;

 setInterval(() => {
    
      this.setState(previousState => {

      var topMost = -200;
      var downMost = 200;
        
      if(previousState.styles.top>=downMost){
          this.state.direction = -1;
      }
      else if(previousState.styles.top<=topMost){
          this.state.direction = 1;
      }else if(previousState.styles.top>=10){
          this.state.direction = -1;
      }
      
        return { styles : { top: previousState.styles.top + this.state.direction, left: 40}};
      });
    }, 0);
	}

	render(){
		return (<View style={[styles.circle, this.state.styles]}></View>);
	}

}


const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    backgroundColor: 'black',
    borderRadius: 100/2
}
});

