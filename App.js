import React from 'react';
import PropTypes from 'prop-types';
import About from './components/About';
import Search from './components/Search';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawerContentComponent = (props) => (
    <View style={styles.container}>
        <View style={{flex: 1}}>
            <View style={{
                backgroundColor: '#0D47A1',
                paddingTop: StatusBar.currentHeight,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                alignContent: 'center',
                height: 150
            }}>
                <MaterialCommunityIcons
                    name="weather-sunny"
                    size={50}
                    style={{color: '#FFF', marginLeft: 20}}
                />
                <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 30, marginLeft: 10}}>OpenWeather</Text>
            </View>
            <DrawerItems {...props} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

const drawer = DrawerNavigator({
    Home: {
        screen: Search,
    },
    Notifications: {
        screen: About,
    },
}, {
    contentComponent: CustomDrawerContentComponent
});

export default drawer;