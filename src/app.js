import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import List from './components/List';

const App = () => {
    return (
        <View style={[{ flex: 1 }, styles.container]}>
            <List></List>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000'
    }
})

export default App;