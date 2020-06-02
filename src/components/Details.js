import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Dimensions,
    ImageBackground,
    Share,
    Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabsEpisodes from './TabsEpisodes';
import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('window');

const Details = (props) => {
    const { navigate, goBack } = props.navigation
    const { params } = props.route
    const { episodes } = params.item.details
    const { name } = params.item
    const { thumbnail, cast, description, year, creator, numOfEpisodes, season } = params.item.details
    const [measuresTitle, setMeasuresTitle] = useState(0);
    const [measuresSeason, setMeasuresSeason] = useState(0);
    const [scrollY, setScrollY] = useState(new Animated.Value(0));

    const headerNameToggle = scrollY.interpolate({
        inputRange: [measuresTitle, measuresTitle + 1],
        outputRange: [0, 1]
    })
    const headerSeasonHide = scrollY.interpolate({
        inputRange: [
            measuresSeason - 1,
            measuresSeason,
            measuresSeason + 1
        ],
        outputRange: [-width, 0, 0]
    })
    const headerSeasonToggle = scrollY.interpolate({
        inputRange: [measuresSeason, measuresSeason + 1],
        outputRange: [0, 1]
    })
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

    return (
        <View style={{ flex: 1 }}>
            <TouchableHighlight
                style={styles.closeButton}
                onPress={() => goBack()}
            >
                <Icon
                    name="close"
                    color="white"
                    size={22}
                />
            </TouchableHighlight>
            <Animated.View style={[styles.header, { opacity: headerNameToggle }]}>
                <Text style={styles.headerText}>{name}</Text>
            </Animated.View>
            <Animated.View
                style={[styles.header, {
                    opacity: headerSeasonToggle,
                    transform: [{ translateY: 0 }, { translateX: headerSeasonHide }]
                }]}>
                <Text style={styles.headerText}>Season 1</Text>
            </Animated.View>
            <Animated.ScrollView
                scrollEventThrottle={1}
                onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )
                } style={styles.container}>
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
                            setMeasuresTitle(nativeEvent.layout.y)
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
                <View onLayout={({ nativeEvent }) => {
                    setMeasuresSeason(nativeEvent.layout.y + 1)
                }}>
                    <TabsEpisodes data={episodes}></TabsEpisodes>
                </View>
            </Animated.ScrollView >
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
    },
    closeButton: {
        position: 'absolute',
        top: 15,
        right: 10,
        zIndex: 2
    },
})

export default Details;