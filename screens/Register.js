import { StyleSheet, Text, View, SafeAreaView, ImageBackground, StatusBar, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import firebase, { initializeApp } from "firebase/app";
import auth from "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

export default function Register({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCF, setPasswordCF] = useState('');
    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyBqD1nzf3oqE8MyEmdQ7mm6rmDD9TpQglg",
            authDomain: "skyteam-chat.firebaseapp.com",
            projectId: "skyteam-chat",
            storageBucket: "skyteam-chat.appspot.com",
            messagingSenderId: "753445584708",
            appId: "1:753445584708:web:1627245d844fa60df86111",
            measurementId: "G-NW91ZNCGSQ"
        };
        // firebase.initializeApp(firebaseConfig);
        if (!firebase.apps.length) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            // const analytics = getAnalytics(app);
            console.log('ket noi thanh cong');
            // getDatabase();
        }
    }, []);
    function addDatabase(id, name, email, password) {
        firebase.database().ref('users/').push().set({
            // push() sẽ bổ sung cho id
            name: name,
            email: email,
            password: password
        }, function (error) {
            if (error) {
                alert('loi nang');
            } else {
                alert('thanh cong');
            }
        })
    }
    // function updateDatabase(id, name, address) {
    //     firebase.database().ref('users/' + id).set({
    //         Name: name,
    //         address: address
    //     }, function (error) {
    //         if (error) {
    //             alert('loi nang');
    //         } else {
    //             alert('thanh cong');
    //         }
    //     })
    // }
    // function deleteDatabase(id) {
    //     firebase.database().ref('users/' + id).remove();
    //     alert('xoa thanh cong');
    // }
    // function getDatabase() {
    //     firebase.database().ref('users/').on('value', function (snapshot) {
    //         let array = [];
    //         snapshot.forEach(function (item) {
    //             var childData = item.val();
    //             array.push({
    //                 id: item.key,
    //                 name: childData.Name,
    //                 address: childData.address
    //             });
    //         });
    //         setData(array);
    //     });
    // }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"></StatusBar>
                <View style={styles.boxLogin}>
                    <Text style={styles.Title}>Register</Text>
                    <>
                        <View style={styles.boxFrom}>
                            <View style={styles.groupText}>
                                <Text style={styles.label}>Tên Hiển Thị</Text>
                                <TextInput style={styles.textInput} placeholder='tên hiển thị tron App...'
                                    onChangeText={(text) => setName(text)}
                                />
                                <Text style={styles.textError}>* khong duoc dai hon 40 ky tu</Text>
                            </View>
                        </View>
                    </>
                    <>
                        <View style={styles.boxFrom}>
                            <View style={styles.groupText}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput style={styles.textInput} placeholder='nhập email hoặc số điện thoại..'
                                    onChangeText={(text) => setEmail(text)}
                                />
                                <Text style={styles.textError}>* khong duoc dai hon 40 ky tu</Text>
                            </View>
                        </View>
                    </>
                    <>
                        <View style={styles.boxFrom}>
                            <View style={styles.groupText}>
                                <Text style={styles.label}>Mật Khẩu</Text>
                                <TextInput style={styles.textInput} placeholder='nhập mật khẩu...'
                                    onChangeText={(text) => setPassword(text)}
                                />
                                <Text style={styles.textError}>* khong duoc dai hon 40 ky tu</Text>
                            </View>
                        </View>
                    </>
                    <>
                        <View style={styles.boxFrom}>
                            <View style={styles.groupText}>
                                <Text style={styles.label}>Nhập Lại Mật Khẩu</Text>
                                <TextInput style={styles.textInput} placeholder='xác nhận lại mật khẩu của bạn...'
                                    onChangeText={(text) => setPasswordCF(text)}
                                />
                                <Text style={styles.textError}>* khong duoc dai hon 40 ky tu</Text>
                            </View>
                        </View>
                    </>
                    <TouchableOpacity style={styles.buttonLogin} onPress={() =>
                        // console.log(name + ' ' + email + ' ' + password)}
                        addDatabase('id',name, email, password)
                    >
                        <Text style={styles.textButton}>Đăng Ký</Text>
                    </TouchableOpacity>
                    <View style={styles.Or}>
                        <Text style={styles.textOne}></Text>
                        <Text style={styles.textTwo}>Or with</Text>
                        <Text style={styles.textThree}></Text>
                    </View>
                    <View style={styles.iconLink}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Ionicons name='logo-facebook' size={30} color="tomato" />
                            <Text style={styles.textIconLink}>Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Ionicons name='ios-mail' size={30} color="tomato" />
                            <Text style={styles.textIconLink}>Gmail</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.register} onPress={() => navigation.goBack('Login')}>
                        <Text style={styles.textRegister}>Bạn đã có tải khoản ? Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    boxLogin: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        // height: '80%',
        width: '90%',
        alignItems: 'center',
        padding: 10,
    },
    Title: {
        fontSize: 35,
        color: 'tomato',
        fontWeight: 'bold',
        textShadowColor: 'tomato',
        textShadowOffset: { width: 3, height: 2.5 },
        textShadowRadius: 1,
    },
    boxFrom: {
        width: '100%',
        marginTop: 15,
    },
    label: {
        color: 'tomato',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'tomato',
        marginTop: 10,
        padding: 10,
    },
    textError: {
        fontSize: 10,
        color: 'tomato',
        fontStyle: 'italic',
    },
    buttonLogin: {
        backgroundColor: 'tomato',
        marginTop: 25,
        width: '100%',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: '#FFFFFF',
        fontWeight: '500'
    },
    Or: {
        width: '100%',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textOne: {
        width: '35%',
        height: 2,
        backgroundColor: 'tomato',
    },
    textTwo: {
        color: 'tomato',
        margin: 5,
        textShadowColor: 'tomato',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    textThree: {
        width: '35%',
        height: 2,
        backgroundColor: 'tomato',
    },
    iconLink: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    textIconLink: {
        fontSize: 10,
        color: 'tomato',
    },
    register: {
        width: '100%',
        marginTop: 15,
    },
    textRegister: {
        fontStyle: 'italic',
        color: 'tomato',
        fontSize: 13,
    },
})