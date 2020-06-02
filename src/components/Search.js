import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TextInput, Dimensions, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getAll } from '../api/api';

const { width, height } = Dimensions.get('window')

const Search = (props) => {
    const [text, setText] = useState('')
    const [data, setData] = useState('')

    const { navigate } = props.navigation;

    const filter = (text) => {
        const data = getAll();
        const newData = data.filter(function (item) {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        setText(newData)
        setData(newData)
    }

    const deleteData = () => {
        setText('')
        setData('')
    }

    const renderItem = (item) => {

        return (
            <TouchableWithoutFeedback onPress={() => navigate('Details', { item: item })} >
                <Image style={{ width: 150, height: 200 }} source={{ uri: item.image }} />
            </TouchableWithoutFeedback >
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="search" color="#fff" size={30} style={styles.searchIcon}></Icon>
                <TextInput
                    value={text}
                    onChangeText={(text) => filter(text)}
                    style={styles.input}
                    placeholder="Procurar"
                    placeholderTextColor="grey"
                    keyboardAppearance="dark"
                    autoFocus={true}
                ></TextInput>
                {text ?
                    <TouchableOpacity onPress={() => deleteData()} style={styles.iconInputClose}
                    >
                        <Icon
                            name="cancel"
                            color="#fff"
                            size={30}
                        ></Icon>
                    </TouchableOpacity>
                    : null}
                <TouchableOpacity style={styles.cancelButton} onPress={() => navigate('App')}>
                    <View style={styles.containerButton}>
                        <Text style={styles.cancelButtonText}>Cancelar</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <FlatList
                    style={{ marginHorizontal: 5 }}
                    data={data}
                    numColumns={3}
                    columnWrapperStyle={{ marginTop: 5, marginLeft: 5 }}
                    renderItem={(props) => renderItem(props.item)}
                ></FlatList>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    header: {
        height: 40,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        paddingBottom: 30,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        position: 'absolute',
        top: -8,
        left: 15,
        zIndex: 1,
        backgroundColor: 'transparent'
    },
    iconInputClose: {
        position: 'absolute',
        top: -10,
        right: 100,
        backgroundColor: 'transparent',
        zIndex: 1
    },
    input: {
        width: width - (width / 4),
        height: 40,
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 50,
        borderRadius: 3
    },
    cancelButtonText: {
        color: '#fff'
    },
    image: {
        marginRight: 5,
        width: 115,
        height: 170
    }
})

export default Search;