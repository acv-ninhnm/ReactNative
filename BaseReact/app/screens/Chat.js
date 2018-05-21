import React, { Component } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import io from 'socket.io-client/dist/socket.io.js';
import { widthScreen, heightScreen } from '../constants/Constants';
import Button from 'react-native-button';

import list from '../screens/flatListData';


var arrayChat = [];
var e;

class FlastListItem extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>{this.props.item}</Text>
                {/* <Text>{this.props.item.foodDes}</Text> */}
            </View>
        );
    }
}


export default class Chat extends Component {

    constructor(props) {
        super(props);
        this.socket = io("http://localhost:3000", { jsonp: false });
        e = this;
        this.state = {
            arrayChat: arrayChat,
            textChat: ""
        }
        
        // receive data from server 
        this.socket.on("server-send-text", function(data) {
            e.setState({
                // maunen: data
            });
        });
    }

    _onPressSendText= () => {
        // push data server
        this.socket.emit("client-send-text", this.state.textChat);
        arrayChat.push(this.state.textChat);
        console.log(`array = + ${arrayChat}`);
        
        // this.array.setState(this.state.array.push(this.state.textChat));
    }

    addItemForArray(){
        const {arrayChat} = this.state;
        arrayChat;
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'gray' }}>
                <View style={{ flex: 92 }}>
                    <FlatList
                        data={this.state.arrayChat}
                        renderItem={({ item, index }) => { 
                            return (
                                <FlastListItem item={item} index={index}></FlastListItem>
                            );
                        }}
                    >
                    </FlatList>

                </View>
                <View style={{ flex: 8, flexDirection: 'row'}}>
                    <TouchableOpacity onPress = { this._onPressSendText}>
                        <View style= {{width: 50, height: 100, backgroundColor: 'red'}}>
                            <Text style= {{ color: 'blue', textAlign: 'center', alignItems: 'center'}}>Send</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <View style={{ flex: 8, alignItems: 'flex-start'}}>
                        <TextInput style= {{flex: 1, backgroundColor: 'yellow', width: widthScreen, padding: 10}} 
                        onChangeText = {(text) => this.setState({textChat : text})}
                        value = {this.state.text}
                        >
                        </TextInput>
                    </View>
                </View>
            </View>
        )
    }
}