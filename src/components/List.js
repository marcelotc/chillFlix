import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

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

const shows_second = [
    {
        key: 8,
        name: 'Salvation',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/159/397782.jpg'
    },
    {
        key: 9,
        name: 'Six',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/154/387312.jpg'
    },
    {
        key: 10,
        name: '13 Reasons Why',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/155/387935.jpg'
    },
    {
        key: 11,
        name: 'Daredevil',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/48/122498.jpg'
    },
    {
        key: 12,
        name: 'Vice',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/47/119018.jpg'
    },
    {
        key: 13,
        name: 'Glitch',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/127/319685.jpg'
    },
    {
        key: 14,
        name: 'Gotham',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/126/316941.jpg'
    },
]

const renderItem = (item) => {
    return (
        <Image style={{ width: 150, height: 200 }} source={{ uri: item.image }} />
    )
}

const List = () => {

    return (

        <View style={{ flex: 1 }}>
            <View>
                <Text style={styles.text}>Minha Lista</Text>
                <FlatList
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={{ width: 5 }}></View>}
                    renderItem={({ item }) => renderItem(item)}
                    data={shows_first}
                ></FlatList>
            </View>

            <View>
                <Text style={styles.text}>Recomendados para você</Text>
                <FlatList
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={{ width: 5 }}></View>}
                    renderItem={({ item }) => renderItem(item)}
                    data={shows_second}
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