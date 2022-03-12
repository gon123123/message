import { Text, StyleSheet, View, SafeAreaView, TextInput, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Statusbars from '../components/Statusbar';
import Search from '../components/Search';
import CircleInfo from '../components/CircleInfo';
import BlockMessage from '../components/BlockMessage';

export default function Home() {
    const Stack = createNativeStackNavigator();
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <StatusBar
                backgroundColor="#61dafb"
            />
            <View style={styles.container}>
                <Statusbars name='Home' icon='create-outline'></Statusbars>
                <Search></Search>
                <ScrollView>
                    <CircleInfo></CircleInfo>
                    <BlockMessage></BlockMessage>
                </ScrollView>
            </View>
            {/* navigation */}
            {/* <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={}
                        options={{ title: 'Welcome' }}
                    />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
            </NavigationContainer> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    }
})