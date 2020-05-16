import React from 'react';
import {
    Platform,
    Dimensions,
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import { Container, Tab, Tabs, Text } from 'native-base';
import Episodes from './Episodes';
import Trailers from './Trailers';

const TabsEpisodes = (props) => {

    return (
        <Container style={styles.container}>
            <Tabs initialPage={0}>
                <Tab heading="Episódios" style={{ backgroundColor: '#181818' }} tabStyle={{ backgroundColor: '#181818' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#181818' }} activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}>
                    <View>
                        <Episodes episodes={props.data}></Episodes>
                    </View>
                </Tab>
                <Tab heading="Trailers e mais" style={{ backgroundColor: '#181818' }} tabStyle={{ backgroundColor: '#181818' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#181818' }} activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}>
                    <View>
                        <Trailers></Trailers>
                    </View>
                </Tab>
            </Tabs>
        </Container>
    );
}

const styles = StyleSheet.create({


});

export default TabsEpisodes;