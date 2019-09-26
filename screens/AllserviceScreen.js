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

export default class AllserviceScreen extends Component {
    /* Header Style */
    static navigationOptions=({navigation})=>({
        title: 'All Services',
        headerTintColor:'#FFF',
        headerStyle: {
        backgroundColor: '#000'
        },
        headerRight: (
            <TouchableOpacity onPress={()=>{navigation.navigate('Searchservice')}}>
                <Ionicons name="md-search" size={24} style={{paddingRight:20}} color="#FFF"/>
            </TouchableOpacity>
                
        ),
    });

    /* Constructor */
    constructor(props){
        super(props);
        this.state={
            allServiceType:[
                {name:'Salon'},{name:'Massage'},{name:'Cleaning'},{name:'Repairs'},{name:'Home Projects'},{name:'More'},
            ],
            currentindex:0,
            showingData:[],
            serviceLists:[
                {
                    servicetype_name:'Salon',
                    data:[
                        {name:'Salon at home for women', imageUrl : require("../assets/images/list.jpg")},
                        {name:'Massage for men', imageUrl : require("../assets/images/one.jpg")},
                        {name:"Men's haircut & Grooming", imageUrl : require("../assets/images/two.jpg")},
                        {name:'Massage for women', imageUrl : require("../assets/images/three.jpg")},
                        {name:'Makeup and hairstyling', imageUrl : require("../assets/images/four.jpg")},
                    ]
                },
                {
                    servicetype_name:'Massage',
                    data:[
                        {name:'Massage at home for women', imageUrl : require("../assets/images/list.jpg")},
                        {name:'Massage for men', imageUrl : require("../assets/images/one.jpg")},
                        {name:"Men's haircut & Grooming", imageUrl : require("../assets/images/two.jpg")},
                        {name:'Massage for women', imageUrl : require("../assets/images/three.jpg")},
                        {name:'Makeup and hairstyling', imageUrl : require("../assets/images/four.jpg")},
                    ]
                },
                {
                    servicetype_name:'Cleaning',
                    data:[
                        {name:'Salon at home for women', imageUrl : require("../assets/images/list.jpg")},
                        {name:'Massage for men', imageUrl : require("../assets/images/one.jpg")},
                        {name:"Men's haircut & Grooming", imageUrl : require("../assets/images/two.jpg")},
                        {name:'Massage for women', imageUrl : require("../assets/images/three.jpg")},
                        {name:'Makeup and hairstyling', imageUrl : require("../assets/images/four.jpg")},
                    ]
                },
                {
                    servicetype_name:'Repairs',
                    data:[
                        {name:'Salon at home for women', imageUrl : require("../assets/images/list.jpg")},
                        {name:'Massage for men', imageUrl : require("../assets/images/one.jpg")},
                        {name:"Men's haircut & Grooming", imageUrl : require("../assets/images/two.jpg")},
                        {name:'Massage for women', imageUrl : require("../assets/images/three.jpg")},
                        {name:'Makeup and hairstyling', imageUrl : require("../assets/images/four.jpg")},
                    ]
                },
                {
                    servicetype_name:'Home Projects',
                    data:[
                        {name:'Salon at home for women', imageUrl : require("../assets/images/list.jpg")},
                        {name:'Massage for men', imageUrl : require("../assets/images/one.jpg")},
                        {name:"Men's haircut & Grooming", imageUrl : require("../assets/images/two.jpg")},
                        {name:'Massage for women', imageUrl : require("../assets/images/three.jpg")},
                        {name:'Makeup and hairstyling', imageUrl : require("../assets/images/four.jpg")},
                    ]
                },
                {
                    servicetype_name:'More',
                    data:[
                        {name:'Salon at home for women', imageUrl : require("../assets/images/list.jpg")},
                        {name:'Massage for men', imageUrl : require("../assets/images/one.jpg")},
                        {name:"Men's haircut & Grooming", imageUrl : require("../assets/images/two.jpg")},
                        {name:'Massage for women', imageUrl : require("../assets/images/three.jpg")},
                        {name:'Makeup and hairstyling', imageUrl : require("../assets/images/four.jpg")},
                    ]
                }
            ],
        }
    }
    componentDidMount(){
        this.setState({currentindex:0,showingData:this.state.serviceLists[0].data})
    }

    /* Service type flatlist item */
    showServiceType = ({item,index}) => {
        return(
            <TouchableOpacity 
                style={[index == this.state.currentindex ? styles.borderadd : '',{padding:10,paddingLeft:15,paddingRight:10}]}
                onPress={()=>{this.setState({currentindex:index,showingData:this.state.serviceLists[index].data})}}
            >
                <Text style={{color:'#FFF'}}>{item.servicetype_name}</Text>
            </TouchableOpacity>
        )
      }

      fetchList=({item,index})=>{
        return(
        <View style={{flexDirection:'column',marginLeft:10,marginRight:10,width:'100%',flex:1}}>
            <View style={{flexDirection:'row',flex:1,justifyContent:"flex-start"}}>
                <View style={{flex:1,paddingBottom:5,paddingTop:5}}>
                    <Image
                    style={{height:Dimensions.get('window').width/6,width:Dimensions.get('window').width/6,borderRadius:5}}
                    source={require("../assets/images/one.jpg")} 
                    resizeMode="cover"
                    />
                </View>
                <View style={{justifyContent:'center', flexDirection:'column',flex:3.5,
                borderBottomWidth:1,borderBottomColor:'#EBECEB'}}>
                    <Text style={{fontWeight:'bold',letterSpacing:1.5, fontSize:14}}>{item.name}</Text>
                </View>
            </View>

        </View>
        )
      }




    /* render item */
    render(){
        return (
            <KeyboardAvoidingView style={styles.container}>
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
                <View style={styles.mainView}>
                    <View>
                        <FlatList
                            horizontal={true}
                            data={this.state.serviceLists}
                            renderItem={this.showServiceType}
                            showsHorizontalScrollIndicator={false}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={{
                                paddingLeft:10,paddingRight:10,justifyContent:"space-evenly",
                                flexDirection:"row",backgroundColor:'#000',
                                borderBottomColor:'#B4B6B4',borderBottomWidth:0.5
                            }}
                        />
                    </View>
                    <View style={{flex:1}}>
                        <ScrollView>
                            <FlatList
                                data={this.state.showingData}
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



const styles = StyleSheet.create({
  container: { flex: 1},
  mainView:{ flex:1,flexDirection:"column"},
  borderadd:{borderBottomColor:'#FFF',borderBottomWidth:2},
    /* Loading */
    loadingView: {
      position:"absolute",
      top:Dimensions.get('window').height/2
  },
});
