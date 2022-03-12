import { Text, StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Search() {
    return (
        <View style={styles.containerSearch}>
            <Ionicons name='search-outline' size={27} style={styles.iconSearch} color='tomato' />
            <TextInput placeholder="Search" style={styles.search} />
        </View>
    )
}

const styles = StyleSheet.create({
    containerSearch: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
    },
    search: {
        backgroundColor: '#E0E1E4',
        padding: 3,
        height: 33,
        borderRadius: 10,
        paddingLeft: 27,
        position: 'relative',
    },
    iconSearch: {
        position: 'absolute',
        zIndex: 1,
        paddingLeft: 20,
        paddingTop: 6,
        fontSize: 20,
        color: '#A1A2A4'
    }
})