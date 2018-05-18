import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Image, StyleSheet }  from 'react-native';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import { NAVI_BACKGROUND } from '../constants/Constants';

export const HomeStack = StackNavigator ({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
	}
}, {
    navigationOptions: ({ navigation }) => ({
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        }, headerStyle: {
            backgroundColor: NAVI_BACKGROUND
        }
    })
});

export const ChatStack = StackNavigator ({
    Chat: {
        screen: Chat,
        navigationOptions: {
            title: 'Chat'
        }
    }
}, {
    navigationOptions: ({ navigation }) => ({
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        }, headerStyle: {
            backgroundColor: NAVI_BACKGROUND
        }
    })
});

export const Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../resources/icon_home.png')}
                  style={{ tintColor: tintColor }}
                />
              ),
        }
    },
    Chat: {
        screen: ChatStack,
        navigationOptions: {
            title: 'Chat',
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../resources/icon_chat.png')}
                  style={{ tintColor: tintColor }}
                />
              ),
        }
    }
},{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: true
    }
});