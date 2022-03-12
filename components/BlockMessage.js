import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tuan from '../assets/tuan.jpg';
import { Ionicons } from '@expo/vector-icons';

export default function BlockMessage() {
    const [status, setStatus] = useState(true);
    return (
        <View style={styles.blockMessage}>
            <TouchableOpacity style={styles.block} onPress={() => { setStatus(!status) }}>
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
            <TouchableOpacity style={styles.block} onPress={() => { setStatus(!status) }}>
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
            <TouchableOpacity style={styles.block} onPress={() => { setStatus(!status) }}>
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
            <TouchableOpacity style={styles.block} onPress={() => { setStatus(!status) }}>
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
            <TouchableOpacity style={styles.block} onPress={() => { setStatus(!status) }}>
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
            <TouchableOpacity style={styles.block} onPress={() => { setStatus(!status) }}>
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
            <TouchableOpacity style={styles.block} onPress={() => { setStatus(!status) }}>
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
            <TouchableOpacity style={styles.block} onPress={() => { setStatus(!status) }}>
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
        </View>
    )
}

const TEXT = '#B1B1B2';
const styles = StyleSheet.create({
    blockMessage: {
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
        color: TEXT,
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
})