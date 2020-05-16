import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabsEpisodes from './TabsEpisodes';

const { width, height } = Dimensions.get('window');

const Details = (props) => {
    const { episodes } = props.item.details
    const { name } = props.item
    const { thumbnail, cast, description, year, creator, numOfEpisodes, season } = props.item.details
    return (
        <ScrollView style={styles.container}>
            <ImageBackground style={styles.thumbnail} source={{ uri: thumbnail }}>
                <View style={styles.buttonPlay}>
                    <TouchableWithoutFeedback
                        onPress={null}>
                        <View>
                            <Icon
                                style={styles.iconPlay}
                                name="play-circle-outline"
                                color="#fff"
                                size={90}></Icon>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={[styles.text, styles.titleShow]}>{name}</Text>
                </View>
            </ImageBackground>
            <View style={styles.descriptionContainer}>
                <View style={styles.subtitle}>
                    <Text style={[styles.text, styles.subtitleText]}>{year}</Text>
                    <Text style={[styles.text, styles.subtitleText]}>{numOfEpisodes}</Text>
                    <Text style={[styles.text, styles.subtitleText]}>{season} Season</Text>
                </View>
                <View style={styles.description}>
                    <Text style={[styles.text, styles.light]}>{description}</Text>
                </View>
                <Text style={[styles.text]}>Cast: {cast}</Text>
                <Text style={[styles.text]}>Creator: {creator}</Text>
                <View style={styles.shareListIcons}>
                    <View style={styles.myListIcons}>
                        <Icon
                            name="check"
                            color="#fff"
                            size={30}
                            style={styles.listIcons}
                        ></Icon>
                        <Text style={styles.text}>My List</Text>
                    </View>

                    <View style={styles.myShareIcons}>
                        <Icon
                            name="share"
                            color="#fff"
                            size={30}
                            style={styles.shareIcon}
                        ></Icon>
                        <Text style={styles.text}>Share</Text>
                    </View>
                </View>
            </View>
            <TabsEpisodes data={episodes}></TabsEpisodes>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    nameContainer: {
        backgroundColor: 'transparent'
    },
    titleShow: {
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    thumbnail: {
        flex: 1,
        width: width,
        height: 300
    },
    buttonPlay: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    iconPlay: {
        opacity: 0.7,
        backgroundColor: 'transparent'
    },
    descriptionContainer: {
        paddingHorizontal: 20
    },
    subtitle: {
        flexDirection: 'row'
    },
    subtitleText: {
        marginRight: 20,

    },
    text: {
        color: '#b3b3b3',
        fontSize: 16
    },
    shareListIcons: {
        flexDirection: 'row',
        marginVertical: 30
    },
    listIcons: {
        height: 35
    },
    shareIcon: {
        height: 35
    },
    myListIcons: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
    },
    myShareIcons: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        marginVertical: 10
    },
    light: {
        fontWeight: '200',
    }
})

export default Details;