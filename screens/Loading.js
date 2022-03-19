import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loading({ navigation}) {
    setTimeout(function () {navigation.navigate('Register')},3000);
    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size='large' color='tomato' />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
})