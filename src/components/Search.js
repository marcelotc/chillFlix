import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window')

const shows_first = [
    {
        key: 1,
        name: 'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg'
    },
    {
        key: 2,
        name: 'Modern Family',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg'
    },
    {
        key: 3,
        name: 'The Flash',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/129/323466.jpg'
    },
    {
        key: 4,
        name: 'SuperGirl',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/152/382219.jpg'
    },
    {
        key: 5,
        name: 'Suits',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/160/402351.jpg'
    },
    {
        key: 6,
        name: 'Elementary',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/1888.jpg'
    },
    {
        key: 7,
        name: 'Jack Irish',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/18/47317.jpg'
    },
]

const Search = (props) => {
    const [text, setText] = useState('')
    const [data, setData] = useState('')

    const filter = (text) => {
        const newData = shows_first.filter(function (item) {
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
            <Image key={item.key} style={styles.image} source={{ uri: item.image }}></Image>
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
                <TouchableOpacity style={styles.cancelButton} onPress={() => props.navigator.pop()}>
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