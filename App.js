import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Message from './screens/Message';

export default function App() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Message') {
                            iconName = focused ? 'ios-book' : 'ios-book-outline';
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'tomato',
                    tabStyle: {
                        backgroundColor: 'tomato'
                    }
                })}
            >
                <Tab.Screen options={{
                    title: 'HOME',
                    headerStyle: {
                        // backgroundColor: 'tomato'
                        // color: 'tomato'
                    },
                    headerTitleStyle: {
                        color: 'tomato'
                    },
                    headerShown: false,

                }} name="Home" component={Home} />
                <Tab.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Message" component={Message} />
            </Tab.Navigator>
        </NavigationContainer>
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
