import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainPage } from './MainPage';
import {RewardPage} from './RewardsPage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
            <Stack.Screen name="RewardPage" component={RewardPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
export {StackNavigator};