import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import List from './components/List';
import Slide from './components/Slider';
import Header from './components/Header';
import Menu from './components/Menu';

import SideMenu from 'react-native-side-menu';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const updateMenu = (isOpen) => {
        setIsOpen(isOpen)
    }

    return (
        <View style={[{ flex: 1 }, styles.container]}>
            <SideMenu
                menu={<Menu></Menu>}
                isOpen={isOpen}
                onChange={(isOpen) => updateMenu(isOpen)}
            >
                <View style={[{ flex: 1 }, styles.container]}>
                    <Header toggle={toggle}></Header>
                    <Slide></Slide>
                    <List></List>
                </View>
            </SideMenu>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000'
    }
})

export default App;