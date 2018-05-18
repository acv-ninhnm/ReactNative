import React, { Component } from 'react';
import { Text } from 'react-native';
import io from 'socket.io-client/dist/socket.io.js';

export default class Chat extends Component {
    constructor(props){
        super(props);
        this.socket = io ("http://192.168.3.126:3000", {jsonp:false});
    }

    render() {
        return (
            <Text> aaaa </Text>
        )
    }
}