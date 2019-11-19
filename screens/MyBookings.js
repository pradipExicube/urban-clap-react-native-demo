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
export default class MybookingScreen extends Component {
    /* Header Style */
    static navigationOptions=({navigation})=>({
        title: 'My booking',
        headerTintColor:'#FFF',
        headerStyle: {
        backgroundColor: '#000'
        }
    });

    constructor(props){
        super(props);
        this.state={
            activeSegment:2,
            allData:[1,1,1],
            allOngoingData:[1]
        }
    }

    showOngoing=({item,index})=>{
        return(
            <View style={{flexDirection:"column",marginTop:5,marginBottom:0,paddingTop:10,paddingBottom:0,width:Dimensions.get('window').width,backgroundColor:'#FFF'}}>
            <View style={{flexDirection:'row',flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'flex-start',flex:2}}>
                    <View style={{flexDirection:'column',padding:12,paddingLeft:15,paddingTop:0}}>
                        <Text style={{fontSize:15,fontWeight:"bold",letterSpacing:1,paddingBottom:5}}>Car Deep Cleaning</Text>
                        <Text style={{fontSize:10,letterSpacing:1,color:'#8A8A8A'}}>11:00 AM on 4th Sep, 2019</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                    <View style={{flexDirection:'column',paddingTop:5}}>
                        <Text style={{padding:8,backgroundColor:'#228D27',borderRadius:5,fontSize:8,color:'#fff'}}>ACCEPTED</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row',flex:1,paddingLeft:15,paddingRight:15,padding:15 ,borderTopColor:'#F6F6F6',borderTopWidth:2}}>
                <Text style={{fontSize:14,letterSpacing:1,textAlign:'center'}}>We Will send the details of your service provider 1 hour before scheduled time.</Text>

            </View>
            <View style={{flexDirection:'row',flex:1,borderTopColor:'#F6F6F6',borderTopWidth:2,borderBottomColor:'#F6F6F6',borderBottomWidth:2}}>
                <View style={{flex:1,flexDirecion:'row',justifyContent:'center',borderRightColor:'#F6F6F6',borderRightWidth:1,padding:10,paddingTop:13,paddingBottom:13}}>
                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <Ionicons name="ios-help-circle" size={22} style={{paddingRight: 15}} color="#000"/>
                            <Text style={{fontSize:14,letterSpacing:1}}>Need Help?</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:1,flexDirecion:'row',justifyContent:'center',borderLeftColor:'#F6F6F6',borderLeftWidth:1,padding:10,paddingTop:13,paddingBottom:13}}>
                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <Ionicons name="md-list-box" size={22} style={{paddingRight: 15}} color="#000"/>
                            <Text style={{fontSize:14,letterSpacing:1}}>View</Text>
                        </View>
                    </View>
                </View>

            </View>
          </View>
        )
    }

    fetchList=({item,index})=>{
        return(
          <View style={{flexDirection:"column",marginTop:5,marginBottom:0,paddingTop:10,paddingBottom:0,width:Dimensions.get('window').width,backgroundColor:'#FFF'}}>
            <View style={{flexDirection:'row',flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'flex-start',flex:2}}>
                    <View style={{flexDirection:'column',padding:12,paddingLeft:15,paddingTop:0}}>
                        <Text style={{fontSize:15,fontWeight:"bold",letterSpacing:1,paddingBottom:5}}>Bathroom Deep Cleaning</Text>
                        <Text style={{fontSize:10,letterSpacing:1,color:'#8A8A8A'}}>6.30 PM on 3rd Sep, 2019</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                    <View style={{flexDirection:'column',paddingTop:5}}>
                        <Text style={{padding:8,backgroundColor:'#FF0000',borderRadius:5,fontSize:8,color:'#fff'}}>CANCELLED</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row',flex:1,borderTopColor:'#F6F6F6',borderTopWidth:2,borderBottomColor:'#F6F6F6',borderBottomWidth:2}}>
                <View style={{flex:1,flexDirecion:'row',justifyContent:'center',borderRightColor:'#F6F6F6',borderRightWidth:1,padding:10,paddingTop:13,paddingBottom:13}}>
                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <Ionicons name="ios-help-circle" size={22} style={{paddingRight: 15}} color="#000"/>
                            <Text style={{fontSize:14,letterSpacing:1}}>Need Help?</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:1,flexDirecion:'row',justifyContent:'center',borderLeftColor:'#F6F6F6',borderLeftWidth:1,padding:10,paddingTop:13,paddingBottom:13}}>
                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <Ionicons name="ios-trash" size={22} style={{paddingRight: 15}} color="#000"/>
                            <Text style={{fontSize:14,letterSpacing:1}}>Delete</Text>
                        </View>
                    </View>
                </View>

            </View>
          </View>
        )
      }


    render(){
        return (
            <KeyboardAvoidingView style={styles.container}>
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
                <View style={styles.mainView}>
                    {/* Header Segment list */}
                    <View style={{backgroundColor:'#000',width:Dimensions.get('window').width,flexDirection:"row"}}>
                        <TouchableOpacity 
                        style={this.state.activeSegment == 1 ? styles.activeseg : styles.normalseg }
                        onPress={()=>{this.setState({activeSegment:1})}}>
                            <Text style={this.state.activeSegment == 1 ? styles.activeSegmentText : styles.segmentText }> ONGOING </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={this.state.activeSegment == 2 ? styles.activeseg : styles.normalseg }
                        onPress={()=>{this.setState({activeSegment:2})}}>
                            <Text style={this.state.activeSegment == 2 ? styles.activeSegmentText : styles.segmentText } > HISTORY </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Item lists */}
                    <View style={{height:'91%'}}>
                        <FlatList
                            data={this.state.activeSegment == 1 ? this.state.allOngoingData : this.state.allData}
                            renderItem={this.state.activeSegment ==1 ? this.showOngoing : this.fetchList }
                            showsHorizontalScrollIndicator={false}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={{justifyContent:"space-evenly",flexDirection:"column",width:Dimensions.get('window').width}}
                        />
                    </View>

                </View>
            </KeyboardAvoidingView>
        )
        }
    }

    // MybookingScreen.navigationOptions = {
    //     // header: null,
    //     title: 'My booking',
    // };




const styles = StyleSheet.create({
    container: { flex: 1,backgroundColor:'#F6F6F6'},
    mainView:{ marginBottom:10 },
    normalseg:{
        flex:1,flexDirection:'row',justifyContent:'center',paddingTop:5,paddingBottom:20,
    },
    activeseg:{
      flex:1,flexDirection:'row',justifyContent:'center',paddingTop:5,paddingBottom:20,borderBottomWidth:3,borderBottomColor:'#FFF'
    },
    segmentText:{color:'#fff',letterSpacing:1},
    activeSegmentText:{color:'#fff',letterSpacing:1,fontWeight:"bold"},


    /* Loading */
    loadingView: {
      position:"absolute",
      top:Dimensions.get('window').height/2
  },
});





