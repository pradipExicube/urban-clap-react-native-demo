import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  StyleSheet,View,StatusBar,ImageBackground,Image,Dimensions,Text,ActivityIndicator,KeyboardAvoidingView
} from 'react-native';
import CustomPhoneNumberInput from '../components/PhoneNumberInput';
import CustomButton from '../components/CustomButton';
//loading

// export default function AddPhonenumberScreen() {
export default class AddPhonenumberScreen extends Component {
     
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


    callFun() {
        alert(this.state.username)
        console.log(this.state.username);
    }
    changetext(){
        if(this.state.username){
            if(this.state.username.toString().length == 10){
                this.setState({showloading:true,textEdit:false},()=>{

                    // this.forceUpdate();
                    setTimeout(() => {
                        this.setState({showloading:false,textEdit:true},()=>{
                            this.props.navigation.navigate('Verifyphone')
                        })
                    }, 5000);

                })
            }
        }
        
    }

render(){

  return (
    <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        <ImageBackground 
            source={require("../assets/images/phonenumber_background.jpg")} 
            resizeMode='cover'
            style={styles.backgroundImg}
        >
            <View style={styles.mainView}>
                <View style={{flex:1, backgroundColor:'#fff',justifyContent:"center"}}>
                    <View style={styles.buttonMainView}>
                        <CustomButton onPress={()=>{ this.callFun() }}> Skip for now</CustomButton>
                    </View>
                </View>
                <View style={{flex:4, backgroundColor:'#fff',paddingTop:30}}>
                    {/* For App logo */}
                    <View style={styles.customView}>
                        <View style={{flexDirection:'row',justifyContent:'center',}}>
                            <Image
                                style={{width: (Dimensions.get('window').width/3.5), height: (Dimensions.get('window').width/3.5),resizeMode:'cover'}}
                                source={require("../assets/images/logo.png")}
                            />
                        </View>
                    </View>
                    {/* For App name and others */}
                    <View style={styles.customView}>
                        <Text style={styles.titleText}>UrbanClap</Text>
                        <Text style={styles.subtitleText}>Your Home Services Expert</Text>
                        <Text style={styles.subtitleTextTwo}>
                            Quick 
                            <Text style={{color:'#000'}}> o </Text> 
                            Affordable  
                            <Text  style={{color:'#000'}}> o </Text> 
                            Trusted
                        </Text>
                    </View>
                    {/* Cusotom textInpur section */}
                    <View style={styles.customView}>
                        <View style={{paddingTop:30}}>
                            <CustomPhoneNumberInput
                                value={this.state.username}
                                onChangeText={(text) => {this.setState({username:text},()=>{this.changetext()})}}
                                imagePress={()=>{ this.callFun()}}
                                countryImage={this.state.countryDetails.image}
                                editable={this.state.textEdit}
                            />
                        </View>
                    </View>
                </View>
                {/* For loading purpose only */}
                {this.state.showloading == true ? 
                    <View style={styles.loadingView}>
                        <View style={{flexDirection:'row', justifyContent:"center",width:Dimensions.get('window').width}}>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>
                    </View>
                :null
                }
                {/* For loading purpose only */}
            </View>
        </ImageBackground>
    </KeyboardAvoidingView >
  );
}
}

AddPhonenumberScreen.navigationOptions = {
    // title: 'Home',
    header: null,
};


const styles = StyleSheet.create({
    container: { flex: 1,backgroundColor: '#fff'},
    backgroundImg:{ width: '100%', height: '100%'},
    
    mainView:{ flex:1,flexDirection:"column" },

    buttonMainView:{ flexDirection:'row', justifyContent:"flex-end",right:10 },
    customView:{flexDirection:'column'},
    titleText:{fontSize:25,paddingTop:10,textAlign:"center",fontWeight:"bold", letterSpacing:2},
    subtitleText:{fontSize:16,paddingTop:15,textAlign:"center",fontWeight:"bold", letterSpacing:1},
    subtitleTextTwo:{fontSize:11,paddingTop:4,textAlign:"center",color:'#A8A8A8'},
    loadingView: {
    position:"absolute",
    top:Dimensions.get('window').height/2
    },
  
});
