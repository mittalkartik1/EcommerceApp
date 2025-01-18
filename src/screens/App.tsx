import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNavigator from '../navigation/AppNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from '../redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
    const reduxStore = store;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.flex1}>
                <Provider store={reduxStore}>
                    <PersistGate loading={null} persistor={persistor}>
                        <NavigationContainer>
                            <AppNavigator />
                        </NavigationContainer>
                    </PersistGate>
                </Provider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
});

export default App;
