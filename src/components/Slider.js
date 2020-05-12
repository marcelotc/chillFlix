import React, { useState } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';

import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window')

const Slider = props => (
    <View style={styles.container}>
        <Image style={styles.image} source={props.uri}></Image>
    </View>
)

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width
    }
}

export default () => {
    const [imageSlider] = useState([
        require('../images/1.jpg'),
        require('../images/2.jpg'),
        require('../images/3.jpg'),
    ]);

    return (
        <View style={{ flex: 1 }}>
            <Swiper
                autoplay
                height={240}
            >
                {imageSlider.map((item, i) => <Slider uri={item} key={i}></Slider>)}
            </Swiper>
        </View>
    )
}