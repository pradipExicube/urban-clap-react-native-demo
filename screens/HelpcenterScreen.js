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
  TextInput,
  SectionList,
  Item
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// export default function HomeScreen() {
export default class HelpcenterScreen extends Component {

  /* Header Style */
  static navigationOptions=({navigation})=>({
      title: 'Customer Support',
      headerTintColor:'#FFF',
      headerStyle: {
      backgroundColor: '#000'
      }
  });

  constructor(props){
      super(props);
      this.state = {
        data:[
          // {
          //   title: 'Manage all your bookings',
          //   data: [],
          // },
          {
            title: 'Popular Solutions',
            data: ['Cancel & Reschedule','Account setting'],
          },
          {
            title: 'F.A.Q',
            data: ['Booking Services', 'Paying for services', 'A guide to APP'],
          }
        ]
      };
  }

  iconSlider = ({item,index}) => {
    return(
        <TouchableOpacity style={{
          padding:10,paddingTop:15,paddingBottom:15,
          borderBottomColor:'#F0F0F0',borderBottomWidth:1,
          flexDirection:"column",justifyContent:"center"
        }}>
          <View style={{flexDirection:'row',flex:1,justifyContent:"space-between"}}>
              <Text style={{paddingLeft: 15,letterSpacing:1}}>{item}</Text>
              <Ionicons name="ios-arrow-forward" size={20} style={{paddingRight: 15}} color="#000"/>
          </View>
          
        </TouchableOpacity>
    )
  }

  render(){
      return (
          <KeyboardAvoidingView style={styles.container}>
              <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
              <View style={styles.mainView}>

                  <TouchableOpacity style={{ padding:20,flexDirection:"column",justifyContent:"center", borderBottomColor:'#F0F0F0',borderBottomWidth:1 }}> 
                      <View  style={{flexDirection:'row',width:(Dimensions.get('window').width-40),justifyContent:"space-between"}}>
                          <Text style={{letterSpacing:1}}>Manage all your bookings</Text>
                          <Ionicons name="ios-arrow-forward" size={20} color="#000"/>
                      </View>
                  </TouchableOpacity>

                  <SectionList
                      sections={this.state.data}
                      keyExtractor={(item, index) => item + index}
                      renderItem={this.iconSlider}
                      renderSectionHeader={({ section: { title } }) => (
                        <View style={{marginBottom:5,padding:10,paddingTop:20,paddingBottom:20,backgroundColor:'#F0F0F0'}}>
                          <Text style={{paddingLeft: 15,paddingRight:15,fontWeight:"bold",letterSpacing:1}}>{title}</Text>
                        </View>
                      )}
                    />
              </View>
          </KeyboardAvoidingView>
      )
      }
  }


const styles = StyleSheet.create({
  container: { flex: 1},
    /* Loading */
    loadingView: {
      position:"absolute",
      top:Dimensions.get('window').height/2
  },
});
