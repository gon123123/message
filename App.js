import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Phonebook from './screens/Phonebook';
import Message from './screens/Message';
import Chat from './screens/Chat';
import Login from './screens/Login';
import Register from './screens/Register';
import Loading from './screens/Loading';

const ChatStack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <NavigationContainer>
                <ChatStack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName="Loading"
                >
                    <ChatStack.Screen name="Loading" component={Loading} />
                    <ChatStack.Screen name="Login" component={Login} />
                    <ChatStack.Screen name="Register" component={Register} />
                    <ChatStack.Screen name="Home" component={Home} />
                    <ChatStack.Screen name="Chat" component={Chat} />
                    <ChatStack.Screen name="Message" component={Message} />
                    <ChatStack.Screen name="Phonebook" component={Phonebook} />
                </ChatStack.Navigator>
            </NavigationContainer>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
