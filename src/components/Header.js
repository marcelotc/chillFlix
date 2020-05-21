import React from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = (props) => {
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggle()}>
                <Icon name="menu" color="#fff" size={30}></Icon>
            </TouchableWithoutFeedback>
            <Image style={styles.logo} source={require('../images/logo.png')}></Image>
            <TouchableNativeFeedback onPress={() => navigate('Search')}>
                <Icon name="search" color="#fff" size={30}></Icon>
            </TouchableNativeFeedback>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingHorizontal: 15
    },
    logo: {
        width: 120,
        height: 40
    }
})

export default Header;