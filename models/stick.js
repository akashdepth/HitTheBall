import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View } from 'react-native';

export default class Stick extends Component{
	constructor(props) {
		    super(props);
	}

	render(){
		return (<View style={this.props.position}></View>);
	}

}