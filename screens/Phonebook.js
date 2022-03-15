import { Text, StyleSheet, View, SafeAreaView, TextInput, ScrollView, StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Statusbars from '../components/home/Statusbar';
import Search from '../components/home/Search';
import CircleInfoList from '../components/category/CircleInfoList';
import BottomTab from '../components/BottomTab';
import { Ionicons } from '@expo/vector-icons';

export default function Phonebook({ navigation, route }) {
    const Stack = createNativeStackNavigator();
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <StatusBar
                backgroundColor="#61dafb"
            />
            <View style={styles.container}>
                <Statusbars name='Phonebook' icon='rocket-outline'></Statusbars>
                <ScrollView>
                    <CircleInfoList />
                </ScrollView>
                {/* START Bottom tabs */}
                <View style={styles.BottomTabContainer}>
                    <TouchableOpacity style={styles.BottomTabItem}
                        onPress={() => (
                            navigation.navigate('Home')
                        )}
                    >
                        <Ionicons name='home-outline' size={24} color="tomato" />
                        <Text style={styles.BottomTabTitle}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BottomTabItem}
                        onPress={() => (
                            console.log('hello'),
                            navigation.navigate('Phonebook')
                        )}
                    >
                        <Ionicons name='ios-book' size={24} color="tomato" />
                        <Text style={styles.BottomTabTitle}>PhoneBook</Text>
                    </TouchableOpacity>
                </View>
                {/* End Bottom tabs */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: '100%',
    },
    // bottom tabs 
    BottomTabContainer: {
        width: '100%',
        height: 48.5,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255,0.99)',
    },
    BottomTabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomTabTitle: {
        fontSize: 11,
        fontWeight: '500',
        color: 'tomato'
    }
})