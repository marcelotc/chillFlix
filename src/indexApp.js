import React from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';

import App from './app';
import Search from './components/Search';
import Details from './components/Details';

const IndexApp = () => {

    const renderScene = (route, navigator) => {
        var navigator = { navigator }

        switch (route.ident) {
            case 'App':
                return (
                    <App {...navigator}></App>
                )
            case 'Search':
                return (
                    <Search {...navigator}></Search>
                )
            case 'Details':
                return (
                    <Details {...navigator} {...route.passProps}></Details>
                )
        }
    }

    return (
        <Navigator
            initialRoute={{ ident: 'App' }}
            renderScene={renderScene}
        ></Navigator>
    )
}

export default IndexApp