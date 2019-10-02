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


    static navigationOptions=({navigation})=>{
      const { params = {} } = navigation.state;
      return{
        headerTitle: (
          <TextInput
            placeholder="Search for a service"
            underlineColorAndroid="transparent"
            onChangeText={(text)=>{params.handleTextChange(text)}}
            style={{color:'#000'}}
          />   
        ),
      }
    };

    componentDidMount() {
      /* for header purpose */
      this.props.navigation.setParams({
        handleTextChange: this.checkTextChange,
      });
    }

    /* for header purpose */
    checkTextChange = (text) => {
      console.log(text);
      this.setState({searchItem:text})
    }
    
    constructor(props){
        super(props);
        this.state={searchItem:'',
        alldata:[
          require("../assets/images/service.png"),
          require("../assets/images/service.png"),
          require("../assets/images/service.png"),
          require("../assets/images/service.png"),
          require("../assets/images/service.png"),
        ]
      }
    }
    
    /* Show Data */
    showDetails = ({item,index}) => {
      return(
        <View style={{padding:7,paddingLeft:20,paddingRight:20,borderBottomColor:'#CCD1D1',borderBottomWidth:1,width:Dimensions.get('window').width,justifyContent:'center'}}>
            <View style={{flexDirection:"row"}}>
                <View style={{flex:1}}>
                    <Image
                      style={{width: ((Dimensions.get('window').width*8)/100), height:((Dimensions.get('window').width*10)/100)}}
                      source={item} 
                      resizeMode="cover"
                    />
                </View>
                <View style={{flex:4,justifyContent:"center"}}>
                    <Text>Service One</Text>
                </View>
            </View>
        </View>
      )
    }


    render(){
        return (
            <KeyboardAvoidingView style={styles.container}>
              <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
              <View>
                <FlatList
                    data={this.state.alldata}
                    renderItem={this.showDetails}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{width:(Dimensions.get('window').width-10),alignSelf:"center"}}
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
