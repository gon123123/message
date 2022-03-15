import { Text, StyleSheet, View, SafeAreaView, TextInput, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Statusbars from '../components/home/Statusbar';
import Search from '../components/home/Search';
import CircleInfo from '../components/home/CircleInfo';
import tuan from '../assets/tuan.jpg';
import { Ionicons } from '@expo/vector-icons';
import BottomTab from '../components/BottomTab'

export default function Home({ navigation, route }) {
    const [status, setStatus] = useState(true);
    return (
        <>
            <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
                <StatusBar
                    backgroundColor="#61dafb"
                />
                <View style={styles.container}>
                    <Statusbars name='Home' icon='create-outline'></Statusbars>
                    <Search></Search>
                    <ScrollView>
                        <CircleInfo></CircleInfo>
                        {/* start Component BlockMessage */}
                        <TouchableOpacity style={styles.block}
                            onPress={() => {
                                navigation.navigate('Chat');
                                setStatus(!status);
                            }}
                        >
                            <Image source={tuan} style={styles.blockLeft} />
                            <View style={styles.status}></View>
                            <View style={styles.blockCenter}>
                                <Text style={styles.blockTitle}>Minh Tuan</Text>
                                <View style={styles.message}>
                                    <Text style={styles.messInfo} numberOfLines={1} ellipsizeMode='tail' >Huy: efggfeuygugafyefawgheuifhaihfiug</Text>
                                    <Text style={styles.messInfo}>13:30</Text>
                                </View>
                            </View>
                            <View style={styles.blockRight}>
                                <Ionicons name='ios-notifications-off' size={18} color='#B1B1B2' style={{ transform: [{ scaleX: -1 }] }} />
                                {(status) && <View style={styles.blockStatusRead}></View>}
                            </View>
                        </TouchableOpacity>
                        {/* end Component BlockMessage */}
                        {/* start Component BlockMessage */}
                        <TouchableOpacity style={styles.block}
                            onPress={() => {
                                navigation.navigate('Chat');
                                setStatus(!status);
                            }}
                        >
                            <Image source={tuan} style={styles.blockLeft} />
                            <View style={styles.status}></View>
                            <View style={styles.blockCenter}>
                                <Text style={styles.blockTitle}>Minh Tuan</Text>
                                <View style={styles.message}>
                                    <Text style={styles.messInfo} numberOfLines={1} ellipsizeMode='tail' >Huy: efggfeuygugafyefawgheuifhaihfiug</Text>
                                    <Text style={styles.messInfo}>13:30</Text>
                                </View>
                            </View>
                            <View style={styles.blockRight}>
                                <Ionicons name='ios-notifications-off' size={18} color='#B1B1B2' style={{ transform: [{ scaleX: -1 }] }} />
                                {(status) && <View style={styles.blockStatusRead}></View>}
                            </View>
                        </TouchableOpacity>
                        {/* end Component BlockMessage */}
                        {/* start Component BlockMessage */}
                        <TouchableOpacity style={styles.block}
                            onPress={() => {
                                navigation.navigate('Chat');
                                setStatus(!status);
                            }}
                        >
                            <Image source={tuan} style={styles.blockLeft} />
                            <View style={styles.status}></View>
                            <View style={styles.blockCenter}>
                                <Text style={styles.blockTitle}>Minh Tuan</Text>
                                <View style={styles.message}>
                                    <Text style={styles.messInfo} numberOfLines={1} ellipsizeMode='tail' >Huy: efggfeuygugafyefawgheuifhaihfiug</Text>
                                    <Text style={styles.messInfo}>13:30</Text>
                                </View>
                            </View>
                            <View style={styles.blockRight}>
                                <Ionicons name='ios-notifications-off' size={18} color='#B1B1B2' style={{ transform: [{ scaleX: -1 }] }} />
                                {(status) && <View style={styles.blockStatusRead}></View>}
                            </View>
                        </TouchableOpacity>
                        {/* end Component BlockMessage */}
                        {/* start Component BlockMessage */}
                        <TouchableOpacity style={styles.block}
                            onPress={() => {
                                navigation.navigate('Chat');
                                setStatus(!status);
                            }}
                        >
                            <Image source={tuan} style={styles.blockLeft} />
                            <View style={styles.status}></View>
                            <View style={styles.blockCenter}>
                                <Text style={styles.blockTitle}>Minh Tuan</Text>
                                <View style={styles.message}>
                                    <Text style={styles.messInfo} numberOfLines={1} ellipsizeMode='tail' >Huy: efggfeuygugafyefawgheuifhaihfiug</Text>
                                    <Text style={styles.messInfo}>13:30</Text>
                                </View>
                            </View>
                            <View style={styles.blockRight}>
                                <Ionicons name='ios-notifications-off' size={18} color='#B1B1B2' style={{ transform: [{ scaleX: -1 }] }} />
                                {(status) && <View style={styles.blockStatusRead}></View>}
                            </View>
                        </TouchableOpacity>
                        {/* end Component BlockMessage */}
                        {/* start Component BlockMessage */}
                        <TouchableOpacity style={styles.block}
                            onPress={() => {
                                navigation.navigate('Chat');
                                setStatus(!status);
                            }}
                        >
                            <Image source={tuan} style={styles.blockLeft} />
                            <View style={styles.status}></View>
                            <View style={styles.blockCenter}>
                                <Text style={styles.blockTitle}>Minh Tuan</Text>
                                <View style={styles.message}>
                                    <Text style={styles.messInfo} numberOfLines={1} ellipsizeMode='tail' >Huy: efggfeuygugafyefawgheuifhaihfiug</Text>
                                    <Text style={styles.messInfo}>13:30</Text>
                                </View>
                            </View>
                            <View style={styles.blockRight}>
                                <Ionicons name='ios-notifications-off' size={18} color='#B1B1B2' style={{ transform: [{ scaleX: -1 }] }} />
                                {(status) && <View style={styles.blockStatusRead}></View>}
                            </View>
                        </TouchableOpacity>
                        {/* end Component BlockMessage */}
                        {/* start Component BlockMessage */}
                        <TouchableOpacity style={styles.block}
                            onPress={() => {
                                navigation.navigate('Chat');
                                setStatus(!status);
                            }}
                        >
                            <Image source={tuan} style={styles.blockLeft} />
                            <View style={styles.status}></View>
                            <View style={styles.blockCenter}>
                                <Text style={styles.blockTitle}>Minh Tuan</Text>
                                <View style={styles.message}>
                                    <Text style={styles.messInfo} numberOfLines={1} ellipsizeMode='tail' >Huy: efggfeuygugafyefawgheuifhaihfiug</Text>
                                    <Text style={styles.messInfo}>13:30</Text>
                                </View>
                            </View>
                            <View style={styles.blockRight}>
                                <Ionicons name='ios-notifications-off' size={18} color='#B1B1B2' style={{ transform: [{ scaleX: -1 }] }} />
                                {(status) && <View style={styles.blockStatusRead}></View>}
                            </View>
                        </TouchableOpacity>
                        {/* end Component BlockMessage */}
                    </ScrollView>
                    {/* START Bottom tabs */}
                    <View style={styles.BottomTabContainer}>
                        <TouchableOpacity style={styles.BottomTabItem}
                            onPress={() => (
                                navigation.navigate('Home')
                            )}
                        >
                            <Ionicons name='home' size={24} color="tomato" />
                            <Text style={styles.BottomTabTitle}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BottomTabItem}
                            onPress={() => (
                                navigation.navigate('Phonebook')
                            )}
                        >
                            <Ionicons name='ios-book-outline' size={24} color="tomato" />
                            <Text style={styles.BottomTabTitle}>PhoneBook</Text>
                        </TouchableOpacity>
                    </View>
                    {/* End Bottom tabs */}
                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: '100%',
    },
    block: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
    },
    blockLeft: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 17,
        position: 'relative',
    },
    status: {
        position: 'absolute',
        bottom: 15,
        left: 60,
        width: 14,
        height: 14,
        backgroundColor: '#19EB15',
        borderRadius: 14 / 2,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    blockCenter: {
        flex: 1,
        paddingTop: 8,
        // backgroundColor: 'green',
    },
    blockTitle: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 7,
    },
    message: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        paddingRight: 35
    },
    messInfo: {
        color: '#B1B1B2',
        fontSize: 13,
    },
    blockRight: {
        width: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingRight: 5
    },
    blockStatusRead: {
        width: 13,
        height: 13,
        backgroundColor: '#0C65F8',
        borderRadius: 13 / 2,
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