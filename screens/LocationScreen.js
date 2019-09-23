import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  StyleSheet,View,StatusBar,ImageBackground,Image,Dimensions,Text,ActivityIndicator,KeyboardAvoidingView
} from 'react-native';
import CustomButtonIcon from '../components/CustomiconButton';



// export default function AddPhonenumberScreen() {
export default class LocationScreen extends Component {
     
    constructor(props){
        super(props);
        this.state={
            username:"",
            textEdit:true,
            countryDetails:{
                image:require('../assets/images/india.jpg'),
                code:'+91'
            },
            showloading:false
        }; 
    }

render(){

  return (
    <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        <ImageBackground 
            source={require("../assets/images/location_background.jpg")} 
            resizeMode='cover'
            style={styles.backgroundImg}
        >
            <View style={styles.mainView}>
                <View style={{flex:4,justifyContent:"center"}}>
                    <View><Text style={{textAlign:'center',fontSize:18}}>Hi, nice to meet you!</Text></View>
                    <View><Text style={{textAlign:'center',fontSize:24,fontWeight:"bold",paddingTop:8}}>See services around</Text></View>
                </View>

                <View style={{flex:3,justifyContent:"flex-start"}}>
                    <View>
                        <CustomButtonIcon 
                            iconName={"md-locate"}
                            iconColor="#FFF"
                            backgroundColor="#304FFE"
                            borderColor="#304FFE"
                            TextColor="#FFF"
                            iconSize={24}
                        >
                            Your current location
                        </CustomButtonIcon>
                    </View>
                    <View style={{paddingTop:25}}>
                        <CustomButtonIcon 
                            iconName={"md-search"}
                            iconColor="#304FFE"
                            backgroundColor="#FFF"
                            borderColor="#304FFE"
                            TextColor="#304FFE"
                            iconSize={24}
                        >
                            Some other location
                        </CustomButtonIcon>
                    </View>

                </View>

                    
            </View>
        </ImageBackground>
    </KeyboardAvoidingView >
  );
}
}

LocationScreen.navigationOptions = {
    // title: 'Home',
    header: null,
};


const styles = StyleSheet.create({
    container: { flex: 1,backgroundColor: '#fff'},
    backgroundImg:{ width: '100%', height: '100%'},
    mainView:{ flex:1,flexDirection:"column"},
});
