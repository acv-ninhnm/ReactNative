import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Home extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <View style = {{ flex: 1, backgroundColor: 'yellow' }}>

            </View>
        )
    }
}