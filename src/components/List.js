import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import Orientation from 'react-native-orientation';
import { getTwoItems } from '../api/api';

const List = (props) => {

    useEffect(() => {
        Orientation.lockToPortrait();
    }, [])

    const newPushContent = (item) => {
        props.navigator.push({
            ident: 'Details',
            passProps: {
                item
            }
        })
    }
    const renderItem = (item) => {
        const { navigate } = props.navigation;

        return (
            <TouchableWithoutFeedback onPress={() => navigate('Details', { item: item })} >
                <Image style={{ width: 150, height: 200 }} source={{ uri: item.image }} />
            </TouchableWithoutFeedback >
        )
    }
    return (

        <View style={{ flex: 1 }}>
            <View>
                <Text style={styles.text}>Minha Lista</Text>
                <FlatList
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={{ width: 5 }}></View>}
                    renderItem={({ item }) => renderItem(item)}
                    data={getTwoItems[0]}
                ></FlatList>
            </View>

            <View>
                <Text style={styles.text}>Recomendados para você</Text>
                <FlatList
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={{ width: 5 }}></View>}
                    renderItem={({ item }) => renderItem(item)}
                    data={getTwoItems[1]}
                ></FlatList>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    }
})

export default List;