import React from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { defaultImage } from '../images/default-image.png'

const { width, height } = Dimensions.get('window');

const Episodes = (props) => {
    return (
        <View style={styles.container}>
            {props.episodes.map((item, i) => (
                <View style={styles.video} key={i}>
                    <View style={styles.videoEpisode}>
                        <ImageBackground style={styles.image} source={{ uri: item.image === null ? defaultImage : item.image.medium }}>
                            <View style={styles.buttonPlay}>
                                <TouchableWithoutFeedback>
                                    <View style={{ backgroundColor: 'transparent' }}>
                                        <Icon style={styles.iconPlay} name="play-circle-outline" size={30} color="#fff"></Icon>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </ImageBackground>
                        <View style={styles.episodeName}>
                            <Text style={styles.text}>{item.number}. {item.name}</Text>
                            <Text style={styles.text}>{item.runtime}</Text>
                        </View>
                    </View>
                    <Text style={styles.summary}>{item.summary}</Text>
                </View>
            ))}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    image: {
        width: 150,
        height: 80,
        marginRight: 10
    },
    buttonPlay: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    episodeName: {
        justifyContent: 'center'
    },
    videoEpisode: {
        flexDirection: 'row',

    },
    text: {
        color: '#fff'
    },
    summary: {
        color: 'grey',
        marginVertical: 10
    }
})

export default Episodes;