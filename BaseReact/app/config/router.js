import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Chat from '../screens/Chat';

export const HomeStack = StackNavigator ({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    }
});

export const ChatStack = StackNavigator ({
    Chat: {
        screen: Chat,
        navigationOptions: {
            title: 'Chat'
        }
    }
});

export const Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title: 'Home'
        }
    },
    Chat: {
        screen: ChatStack,
        navigationOptions: {
            title: 'Chat'
        }
    }
},{
    tabBarPosition: 'bottom'
});