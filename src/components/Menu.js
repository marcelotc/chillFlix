import React from 'react';
import { Dimensions, StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const Menu = () => {
    return (
        <View style={styles.menu}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatarImage}>
                    <Image
                        style={styles.avatar}
                        source={require('../images/user.png')}></Image>
                    <Text style={styles.text}>Marcelo</Text>
                </View>
                <Icon
                    name="compare-arrows"
                    color="#fff"
                    size={30}
                ></Icon>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.textWithIcon}>
                    <View style={styles.withIcon}>
                        <Icon
                            style={styles.iconWithText}
                            name="get-app"
                            color="#fff"
                            size={30}></Icon>
                        <Text style={styles.text}>Meus Downloads</Text>
                    </View>
                    <Icon
                        style={styles.rightIcon}
                        name="keyboard-arrow-right"
                        color="#fff"
                        size={30}
                    ></Icon>
                </View>
                <View style={styles.textWithIcon}>
                    <View style={styles.withIcon}>
                        <Icon
                            style={styles.iconWithText}
                            name="done"
                            color="#fff"
                            size={30}></Icon>
                        <Text style={styles.text}>Minha lista</Text>
                    </View>
                    <Icon
                        style={styles.rightIcon}
                        name="keyboard-arrow-right"
                        color="#fff"
                        size={30}
                    ></Icon>
                </View>
                <View style={[styles.items, styles.itemSelected]}>
                    <Text style={styles.text}>Home</Text>
                </View>
                <View style={styles.noSelectedItems}>
                    <Text style={styles.text}>Disponível para download</Text>
                </View>
                <View style={styles.noSelectedItems}>
                    <Text style={styles.text}>Originais Netflix</Text>
                </View>
                <View style={styles.noSelectedItems}>
                    <Text style={styles.text}>Séries</Text>
                </View>
                <View style={styles.noSelectedItems}>
                    <Text style={styles.text}>Ação e aventura</Text>
                </View>
                <View style={styles.noSelectedItems}>
                    <Text style={styles.text}>Infantil e Família</Text>
                </View>
                <View style={styles.noSelectedItems}>
                    <Text style={styles.text}>Comédia</Text>
                </View>
                <View style={styles.noSelectedItems}>
                    <Text style={styles.text}>Documentários</Text>
                </View>
                <View style={styles.noSelectedItems}>
                    <Text style={styles.text}>Dramas</Text>
                </View>
                <View style={styles.noSelectedItems}>
                    <Text style={styles.text}>Independentes</Text>
                </View>
                <View style={styles.noSelectedItems}>
                    <Text style={styles.text}>Filmes indianos</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: "#191919"
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 2 + 50,
        borderColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 20
    },
    avatarImage: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#b3b3b3',
        fontSize: 15
    },
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: '#000',
        borderBottomWidth: 3
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    scrollContainer: {
        width: width / 2 + 59
    },
    rightIcon: {
        paddingRight: 20
    },
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20
    },
    items: {
        paddingVertical: 15,
        paddingLeft: 20,
        marginTop: 5
    },
    itemSelected: {
        borderLeftWidth: 5,
        borderColor: 'red'
    },
    noSelectedItems: {
        paddingVertical: 15,
        paddingLeft: 25,
        marginTop: 5
    }
})

export default Menu;