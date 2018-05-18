import React, { Component } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import io from 'socket.io-client/dist/socket.io.js';
import { widthScreen, heightScreen } from '../constants/Constants';

export default class Chat extends Component {
    constructor(props){
        super(props);
        this.socket = io ("http://192.168.3.126:3000", {jsonp:false});
        this.state = {
            behavior: 'padding' 
          }
    }

    render() {
        return (
            <View style = {{ flex: 1, backgroundColor: 'white' }}>
            <KeyboardAvoidingView behavior={this.state.behavior}>
                <TextInput style={{ height: 50, marginLeft: 50, marginBottom: 0, backgroundColor: 'yellow', marginTop: 200 }}> 

                </TextInput>
            </KeyboardAvoidingView>
            </View>
        )
    }
}