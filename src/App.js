import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import Orientation from 'react-native-orientation';

class App extends Component {
	componentDidMount() {
		Orientation.lockToLandscape();
	}
	
	render() {
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>This is my content</Text>
			</View>
		);
	}
}

export default App;
