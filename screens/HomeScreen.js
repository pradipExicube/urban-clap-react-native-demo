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
export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      allData: [
        require("../assets/images/list.jpg"),
        require("../assets/images/one.jpg"),
        require("../assets/images/two.jpg"),
        require("../assets/images/three.jpg"),
        require("../assets/images/four.jpg"),
      ],
      serviceItem:[
        {iconname: require("../assets/images/salon.png"),name:'Salon'},
        {iconname: require("../assets/images/massage.png"),name:'Massage'},
        {iconname: require("../assets/images/vacuum.png"),name:'Cleaning'},
        {iconname: require("../assets/images/reparing.png"),name:'Repairs'},
        {iconname: require("../assets/images/home_project.png"),name:'Home'},
        {iconname: require("../assets/images/more.png"),name:'More'},
      ],
      username:''
    }
  }

  gotoAllSearch(item){
    console.log("clicking item : ", item)
    this.props.navigation.navigate('Allservice')
  }

  // rgba(70, 113, 130, 1)
  // AllserviceScreen
  iconSlider = ({item,index}) => {
    return(
      <TouchableOpacity 
        style={{paddingLeft:10,paddingRight:10,paddingBottom:15,paddingTop:10}}
        onPress={()=>{this.gotoAllSearch(item)}}
      >
        <View>
            <View style={{flexDirection:"row",justifyContent:"center"}}>
              <Image
                style={{width: 25, height: 25}}
                source={item.iconname} 
                resizeMode="cover"
              />
            </View>
            <View><Text style={{fontSize:8, letterSpacing:1, textAlign:"center",paddingTop:5,fontWeight:"bold"}}>{item.name}</Text></View>
        </View>
        

      </TouchableOpacity>
    )
  }

  fetchSliderItem = ({item,index}) => {
    return(
      <View style={{paddingLeft:5,paddingRight:5,paddingBottom:5,paddingTop:10}}>
        <Image
          style={{width: Dimensions.get('window').width-(Dimensions.get('window').width/2.8), height: Dimensions.get('window').width/2.8,borderRadius:4}}
          source={item} 
          resizeMode="cover"
        />

      </View>
    )
  }

  fetchList=({item,index})=>{
    return(
      <View style={{flexDirection:"row",margin:5,marginTop:0,marginBottom:0,alignSelf:"center",paddingTop:5,paddingBottom:5,borderBottomWidth:1,borderBottomColor:'#F2F2F2'}}>
        <View style={{flex:3,justifyContent:"center",flexDirection:"column"}}>
              <View style={{padding:4}}><Text style={{textAlign:'left',fontSize:13,fontWeight:'bold'}}>Cleaning Services</Text></View>
              <View style={{padding:4}}><Text style={{textAlign:'left',fontSize:9,color:'#24D518',letterSpacing:0.5}}>Bathroom | Sofa | Kitchen</Text></View>
        </View>
        <View style={{flex:1,justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
            {/* <Ionicons name="md-arrow-dropright" size={20} style={{justifyContent:"center"}} color="#000"/> */}
            <Image
              style={{width: 16, height: 16}}
              source={require("../assets/images/arrow.png")} 
              resizeMode="cover"
            />
        </View>
        <View style={{flex:3}}>
          <Image
              style={{width: '100%',height:Dimensions.get('window').width/4.5}}
              source={item} 
              resizeMode="cover"
            />
        </View>
      </View>
    )
  }

  render(){
      return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <View style={[styles.mainView,{paddingTop:StatusBar.currentHeight}]}>
                <View style={styles.mainView_sub}>
                    <View style={styles.sub_one}>
                        <Ionicons name="md-pin" size={20} style={styles.sub_one_icon} color="#FFF"/>
                        <View style={styles.sub_one_textView}>
                          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.sub_one_text}>Kestopur, Kolkata, West Bengal</Text>
                        </View>
                    </View>
                    <View style={styles.sub_two}>
                        <View style={styles.sub_two_view}>
                            <View>
                              <Ionicons name="md-search" size={20} style={styles.sub_two_icon}/>
                            </View>
                            <View style={styles.sub_two_input_view}>
                                <TextInput
                                  placeholder="Search for a service"
                                  underlineColorAndroid="transparent"
                                  onChangeText={(text) => {this.setState({username:text})}}
                                  style={{color:'#000'}}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                {/* <View style={styles.slider_main_view}>
                    <FlatList
                      horizontal={true}
                      data={this.state.allData}
                      renderItem={this.fetchSliderItem}
                      showsHorizontalScrollIndicator={false}
                      extraData={this.state}
                      keyExtractor={(item, index) => index.toString()}
                      contentContainerStyle={styles.slider_flatlist}
                    />
                </View> */}

                <View>
                    <FlatList
                        horizontal={true}
                        data={this.state.serviceItem}
                        renderItem={this.iconSlider}
                        showsHorizontalScrollIndicator={false}
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{justifyContent:"space-evenly",flexDirection:"row",width:Dimensions.get('window').width}}
                    />
                </View>

                <View style={{flex:3}}>
                  <ScrollView>
                      <View style={styles.slider_main_view}>
                          <FlatList
                            horizontal={true}
                            data={this.state.allData}
                            renderItem={this.fetchSliderItem}
                            showsHorizontalScrollIndicator={false}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={styles.slider_flatlist}
                          />
                      </View>
                      <FlatList
                        data={this.state.allData}
                        renderItem={this.fetchList}
                        showsHorizontalScrollIndicator={false}
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                      />
                  </ScrollView>
                </View>
            </View>
        </KeyboardAvoidingView>
      )
    }
  }

HomeScreen.navigationOptions = {
  header: null,
};




const styles = StyleSheet.create({
  container: { flex: 1},
  mainView:{ flex:1,flexDirection:"column"},
  mainView_sub:{padding:8,flexDirection:"column",backgroundColor:'#000'},
  
  sub_one:{flexDirection:'row',marginLeft:10,marginRight:10,paddingTop:5},
  sub_one_icon:{justifyContent:"flex-start"},
  sub_one_textView:{paddingRight:10},
  sub_one_text:{color:"#FFF",paddingLeft:10},

  sub_two:{flexDirection:'column',justifyContent:"center",backgroundColor:'#FFF', margin:10,padding: 10,paddingBottom:5, borderWidth:1,borderColor:'#FFF',borderRadius:5},
  sub_two_view:{flexDirection:'row'},
  sub_two_icon:{justifyContent:"flex-start"},
  sub_two_input_view:{paddingLeft:10,paddingRight:10},

  slider_main_view:{height: ((Dimensions.get('window').width/2.8) + 20)},
  slider_flatlist:{height: ((Dimensions.get('window').width/2.8) + 20),backgroundColor:'#F2F2F2'},





    /* Loading */
    loadingView: {
      position:"absolute",
      top:Dimensions.get('window').height/2
  },
});
