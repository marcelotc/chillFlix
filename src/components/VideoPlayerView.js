import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import VideoPlayer from 'react-native-video-controls'
import Orientation from 'react-native-orientation'

const VideoPlayerView = (props) => {
    console.disableYellowBox = true;

    useEffect(() => {
        Orientation.lockToLandscape();
    }, [])

    const back = () => {
        Orientation.lockToPortrait()
        props.navigator.pop()
    }

    return (
        <View style={styles.container}>
            <VideoPlayer
                source={require('../videos/video.mp4')}
                title={'Desi'}
                onBack={() => back()}
            ></VideoPlayer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default VideoPlayerView;