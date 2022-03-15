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
        >
            <ChatStack.Screen name="StackHome" component={Home} />
            <ChatStack.Screen name="Chat" component={Chat} />
        </ChatStack.Navigator>
    )
}
const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = focused
                                    ? 'home'
                                    : 'home-outline';
                            } else if (route.name === 'Phonebook') {
                                iconName = focused ? 'ios-book' : 'ios-book-outline';
                            }
                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'tomato',
                    })}
                >
                    <Tab.Screen options={{
                        title: 'Home',
                        headerStyle: {
                            // backgroundColor: 'tomato'
                            // color: 'tomato'
                        },
                        headerTitleStyle: {
                            color: 'tomato'
                        },
                        headerShown: false,
                        tabBarStyle: { 
                            // display: 'none'
                            // backgroundColor: '',
                            // zIndex: 
                        }
                    }} name="Home" component={ChatStackScreen} />
                    <Tab.Screen
                        options={{
                            headerShown: false,
                        }}
                        name="Phonebook" component={Phonebook} />
                </Tab.Navigator>
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
