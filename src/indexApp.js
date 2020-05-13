import React from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';

import App from './app';
import Search from './components/Search';

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