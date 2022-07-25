import * as React from 'react';
import {Button, StyleSheet, View, TouchableOpacity} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BackButton from "./BackButton";
import { useDrawerStatus} from "@react-navigation/drawer";
import MenuButtonItem from "./MenuButtonItem";
import {useState} from "react";
import {FontAwesome} from "@expo/vector-icons";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to message"
            />
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home"
            drawerContent = {(props) => <MenuItems {...props}/> }
            screenOptions={({navigation}) =>({
                headerLeft: props => <MenuIcon onPress={() => navigation.openDrawer()}/>
            })}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


const MenuIcon = ( props ) =>{
    return(
        <TouchableOpacity onPress={props.onPress} style={{padding:10}}>
            <FontAwesome name="navicon" size={24} color="black" />
        </TouchableOpacity>
    );
}

const MenuItems = ({ navigation }) => {
    const [currentTab, setCurrenTab] = useState('Aprendamos');
    const isDrawerOpen = useDrawerStatus() === 'open';
    const styles = makeStyle();
    return(
        <DrawerContentScrollView style={{backgroundColor:'#9900ff'}}>
            <View style={styles.viewBackButton}>
                <BackButton onPress={() => navigation.closeDrawer()} style={{backgroundColor: 'white'}} color={'purple'} bigButton/>
            </View>
            <View style={{height:hp(50), marginBottom:10}}>
                <MenuButtonItem title={"Aprendamos"} onPress={() => {
                    setCurrenTab('Aprendamos')
                    navigation.navigate('Home')
                }} current={currentTab}/>

                <MenuButtonItem title={"Mensajes"} onPress={() => {
                    setCurrenTab('Mensajes')
                    navigation.navigate('Notifications')
                }} current={currentTab}/>

                <MenuButtonItem title={"Reportes"} onPress={() => {
                    setCurrenTab('Reportes')
                }} current={currentTab}/>

                <MenuButtonItem title={"Aula Virtual"} onPress={() => {
                    setCurrenTab('Aula Virtual')
                }} current={currentTab}/>

                <MenuButtonItem title={"Cerrar Sesion"} onPress={() => {
                    setCurrenTab('Cerrar Sesion')
                }} current={currentTab}/>
            </View>
            <View style={styles.Image}/>
        </DrawerContentScrollView>
    );
}

const makeStyle = () =>{
    return StyleSheet.create({
        viewBackButton: {
            alignItems:'flex-end',
            height:'20%'
        },
        }
    );
}
