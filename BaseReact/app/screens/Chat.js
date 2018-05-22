import React, { Component } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import io from 'socket.io-client/dist/socket.io.js';
import io from 'socket.io-client';
import { widthScreen, heightScreen, IMAGE_SEND } from '../constants/Constants';
import Button from 'react-native-button';
import list from '../screens/flatListData';

var e;

class FlastListItem extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
            {/* if (this.props.index %2 == 0) {
                <View style={{flex: 1, backgroundColor: 'yellow'}}>
                    
                </View>
            } else {
                <View style={{ flex: 1, backgroundColor: 'red'}}>
                    
                </View>
            } */}
                <Text>{this.props.item}</Text>
                {/* <Text>{this.props.item.foodDes}</Text> */}
            </View>
        );
    }
}


export default class Chat extends Component {

    constructor(props) {
        super(props);
        this.socket = io("http://192.168.3.126:3000", { jsonp: false });
        e = this;
        this.state = {
            arrayChat: [],
            textChat: ""
        }

    }

    componentDidMount() {
        // receive data from server 
        this.socket.on("server-send-text", function (data) {
            e.setState({
                arrayChat: data
            });
        });
    }

    _onPressSendText = () => {
        // push data server
        // arrayChat.push(this.state.textChat);
        this.socket.emit("client-send-text", this.state.textChat);
        
        // this.setState({arrayChat: arrayChat});
        // console.log(`text chat+ ${this.state.textChat}`);
        // console.log(`array = + ${this.state.arrayChat}`);

        // this.array.setState(this.state.array.push(this.state.textChat));
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 90 }}>
                    <FlatList
                        data={this.state.arrayChat}
                        renderItem={({ item, index }) => {
                            return (
                                <FlastListItem item={item} index = {index}>
                                </FlastListItem>
                            );
                        }}
                    >
                    </FlatList>

                </View>

                <View style={{ flex: 10, flexDirection: 'row', borderRadius: 10, borderColor: 'black' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ marginLeft: 7, flex: 1, marginTop: 0 }}
                            onPress={this._onPressSendText}>
                            <Image
                                style={{ flex: 1 }}
                                source={require('../resources/icon_send.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 9, alignContent: 'flex-start' }}>
                        <TextInput style={{ flex: 1, padding: 10, borderWidth: 1, borderColor: 'gray' }}
                            placeholder='input text'
                            underlineColorAndroid= "transparent"
                            onChangeText={(text) => this.setState({ textChat: text })}
                            value={this.state.text}
                        >

                        </TextInput>
                    </View>
                </View>
            </View>
        )
    }
}