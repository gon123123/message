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

const ChatStack = createNativeStackNavigator();
function ChatStackScreen() {
    return (
        <ChatStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="StackHome"
        >
            <ChatStack.Screen name="StackHome" component={Home} />
            <ChatStack.Screen name="Chat" component={Chat} />
            <ChatStack.Screen name="Message" component={Message} />
            <ChatStack.Screen name="Phonebook" component={Phonebook} />
        </ChatStack.Navigator>
    )
}
const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <>
            <NavigationContainer>
                <ChatStack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName="Home"
                >
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
