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

// import { Header} from 'react-native-elements';

export default class SearchserviceScreen extends Component {
    // static navigationOptions = {
    //     title: 'All service',
    //     headerTintColor:'#FFF',
    //     headerStyle: {
    //       backgroundColor: '#000'
    //     },
    //     headerRight: (
    //         <TouchableOpacity onPress={()=>{navigation.navigate('Allservice')}}>
    //             <Ionicons name="md-search" size={24} style={{paddingRight:20}} color="#FFF"/>
    //         </TouchableOpacity>
                
    //       ),
    //   }; 
    static navigationOptions=({navigation})=>({
            title: 'Search service',
            headerTintColor:'#FFF',
            headerStyle: {
            backgroundColor: '#000'
            },
            // headerRight: (
            //     <TouchableOpacity onPress={()=>{navigation.navigate('Allservice')}}>
            //         <Ionicons name="md-search" size={24} style={{paddingRight:20}} color="#FFF"/>
            //     </TouchableOpacity>
                    
            // ),
        });
    
    constructor(props){
        super(props);
        this.state={}
    }


    render(){
        return (
            <KeyboardAvoidingView style={styles.container}>
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
                <View>
                    <Text>This is Search service page</Text>
                    <Text>This is Search service page</Text>
                    <Text>This is Search service page</Text>
                </View>
            </KeyboardAvoidingView>
            // <View style={{flex:1}}>
            //     {/* <Header
            //         placement="left"
            //         containerStyle={{ flex:1, height:40,backgroundColor:'#005696', borderBottomWidth:0,paddingTop:0,paddingHorizontal:10}}
            //         // centerComponent={{ text: 'Staff Rating', style: { color: '#fff',fontFamily:'assistant-bold' } }}
            //         // leftComponent={{ icon: 'arrow-back', color: '#fff' ,onPress: () => {this.goBack()}, component: TouchableOpacity }}
            //     /> */}

            // </View>
        )
        }
  }

//   SearchserviceScreen.navigationOptions = {
//     title: 'All service',
//     headerTintColor:'#FFF',
//     headerStyle: {
//       backgroundColor: '#000'
//     },
//     headerRight: (
//         <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Allservice')}}>
//             <Ionicons name="md-search" size={24} style={{paddingRight:20}} color="#FFF"/>
//         </TouchableOpacity>
            
//       ),

// };





const styles = StyleSheet.create({
  container: { flex: 1},

    /* Loading */
    loadingView: {
      position:"absolute",
      top:Dimensions.get('window').height/2
  },
});
