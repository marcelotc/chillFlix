import React from 'react';

import App from './app';
import Search from './components/Search';
import Details from './components/Details';
import Video from './components/VideoPlayerView';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const indexApp = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="App" component={App} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Video" component={Video} />
                <Stack.Screen name="Search" component={Search} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default indexApp