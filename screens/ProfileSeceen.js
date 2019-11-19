import * as WebBrowser from 'expo-web-browser';
import React, {Component}  from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
  StatusBar,

  FlatList,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// export default function HomeScreen() {
export default class ProfileScreen extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return (
            <KeyboardAvoidingView style={styles.container}>
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
                <View style={styles.mainView}>
                    <ScrollView>
                        <View style={{paddingTop:10,paddingBottom:10,flexDirection:'row',justifyContent:'space-between',width:Dimensions.get('window').width,flex:1}}>
                            <View style={{flex:4,flexDirection:"column",paddingLeft:15}}>
                                <Text style={{fontSize:15,fontWeight:'bold',letterSpacing:1,paddingBottom:5}}>Verified Customer</Text>
                                <Text style={{fontSize:12,letterSpacing:1,paddingBottom:10}}>+91 9135686990</Text>
                            </View>
                            <View style={{flex:1,flexDirection:"column",justifyContent:"center"}}>
                                <View style={{height:35,width:35,borderRadius:35,borderWidth:1,borderColor:'#A8A8A8',justifyContent:"center",alignItems:'center'}}>
                                    <Ionicons name="md-create" size={17} color="#A8A8A8"/>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

ProfileScreen.navigationOptions = {
    // header: null,
    title: 'Profile',
};


const styles = StyleSheet.create({
  container: { flex: 1},
  mainView:{flex:1},
    /* Loading */
    loadingView: {
      position:"absolute",
      top:Dimensions.get('window').height/2
  },
});
