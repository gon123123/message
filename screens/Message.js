import { Text, StyleSheet, View, SafeAreaView, TextInput, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Statusbars from '../components/Statusbar';
import Search from '../components/Search';
import CircleInfoList from '../components/CircleInfoList';

export default function Home() {
    const Stack = createNativeStackNavigator();
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <StatusBar
                backgroundColor="#61dafb"
            />
            <View style={styles.container}>
                <Statusbars name='Message' icon='rocket-outline'></Statusbars>
                <ScrollView>
                    <CircleInfoList />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    }
})