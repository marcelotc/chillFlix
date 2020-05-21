import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    ImageBackground,
    Share
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabsEpisodes from './TabsEpisodes';
import * as Animatable from 'react-native-animatable';
import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('window');

const Details = (props) => {
    const { navigate } = props.navigation
    const { params } = props.route
    const { episodes } = params.item.details
    const { name } = params.item
    const { thumbnail, cast, description, year, creator, numOfEpisodes, season } = params.item.details
    const [measures, setMeasures] = useState(0);
    const [header, setHeader] = useState(false);
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        Orientation.lockToPortrait();
    })

    const onShare = () => {
        Share.share({
            title: 'Designated survivor',
            url: 'www.youtube.com',
            message: 'Awesome tv show'
        }, {
            dialogTitle: 'Share this awesome content',
            excludedActivityTypes: 'com.apple.UIKIT.activity.PostToTwitter'
        })
    }

    const handleScroll = (event) => {
        if (event.nativeEvent.contentOffset.y > measures) {
            setAnimation('slideInDown')
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {header ? <Animatable.View animation={animation} style={styles.header}>
                <Text style={styles.headerText}>{name}</Text>
            </Animatable.View> : null}
            <ScrollView onScroll={(event) => handleScroll(event)} style={styles.container}>
                <ImageBackground style={styles.thumbnail} source={{ uri: thumbnail }}>
                    <View style={styles.buttonPlay}>
                        <TouchableWithoutFeedback
                            onPress={() => navigate('Video', { name: name })}>
                            <View>
                                <Icon
                                    style={styles.iconPlay}
                                    name="play-circle-outline"
                                    color="#fff"
                                    size={90}></Icon>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.nameContainer}
                        onLayout={({ nativeEvent }) => {
                            setMeasures(nativeEvent.layout.y)
                        }}
                    >
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
                        <TouchableHighlight onPress={() => onShare()}>
                            <View style={styles.myShareIcons}>
                                <Icon
                                    name="share"
                                    color="#fff"
                                    size={30}
                                    style={styles.shareIcon}
                                ></Icon>
                                <Text style={styles.text}>Share</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <TabsEpisodes data={episodes}></TabsEpisodes>
            </ScrollView >
        </View>
    )
}

const styles = StyleSheet.create({
    nameContainer: {
        backgroundColor: 'transparent'
    },
    header: {
        backgroundColor: '#181818',
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    headerText: {
        color: '#fff',
        fontSize: 20
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