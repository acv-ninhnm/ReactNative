import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from '../screens/Home';

export const HomeStack = StackNavigator ({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    }
},{
    tabBarPosition: 'bottom'
});

export const Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title: 'Home'
        }
    }
},{
    tabBarPosition: 'bottom'
});