import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
/* import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';


const store = configureStore();

const MainStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
); */
AppRegistry.registerComponent('chatmetricsapplication', () => MainStore);
