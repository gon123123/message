import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import ItemMessage from '../components/ChatMessage/ItemChat';
import tuan from '../assets/tuan.jpg';

// rnfes
const Chat = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerStatusBar}>
                <TouchableOpacity>
                    <Ionicons style={styles.icon} name="chevron-back-outline" size={35} color="tomato" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.headerImage} source={tuan} />
                </TouchableOpacity>
                <View style={styles.headerInfo}>
                    <TouchableOpacity>
                        <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode='tail'>Minh Tuan</Text>
                        <Text style={styles.headerStatus}>Đang hoạt động</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons style={styles.iconCall} name="ios-call" size={35} color="tomato" />
                        <Ionicons style={styles.iconCall} name="logo-whatsapp" size={35} color="tomato" />
                        <View style={styles.status}></View>
                    </View>
                </View>
            </View>
            <Text
                onPress={() => { navigation.goBack(); }}
            >Chao</Text>
            <ScrollView>
                <ItemMessage></ItemMessage>
            </ScrollView>
            <View style={styles.sendBox}>
                <Text></Text>
            </View>
        </SafeAreaView >
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#FFFFFF',
        height: '100%',
    },
    headerStatusBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        flexDirection: 'row',
        paddingTop: 4,
        paddingBottom: 4,
        alignItems: 'center',
    },
    headerImage: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginRight: 10,
    },
    headerInfo: {
        flex: 1,
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: '600',
    },
    headerStatus: {
        fontSize: 13,
        color: '#B1B1B2'
    },
    iconCall: {
        fontSize: 30,
        marginRight: 10,
    },
    status: {
        width: 13,
        height: 13,
        borderRadius: 13 / 2,
        backgroundColor: '#4DDD33',
        marginRight: 5
    },
    sendBox: {
        width: '100%',
        height: 48.5,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: -30,
        zIndex: 100,
    }
})