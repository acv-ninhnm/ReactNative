import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

var e;
export default class Home extends Component {

    constructor(props){
        super(props);
        e = this;
        this.state = ({
            count: 0
        });
    }

    _onPressButton() {
        console.log(`press button`);
        // var number = count + 1
        e.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style = {{ flex: 1 }}>
                <Text style={{marginTop: 80}}> Number: {this.state.count}

                </Text>
                <TouchableOpacity style={{marginTop: 200, backgroundColor: 'red'}}
                    onPress = {this._onPressButton}
                >
                    <Text>Add</Text>

                </TouchableOpacity>
            </View>
        )
    }
}