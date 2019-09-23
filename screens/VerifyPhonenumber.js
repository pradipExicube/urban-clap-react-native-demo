import React, {Component} from 'react';
import {
  StyleSheet,View,StatusBar,Dimensions,Text,ActivityIndicator,KeyboardAvoidingView
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class VerifyPhonenumberScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            text2: '',
            timecount:30,
            showloading:false
          }
    }  
    componentDidMount(){}

    componentWillMount(){
        setInterval(() => {
            if(this.state.timecount >0){
            this.setState({timecount : this.state.timecount - 1},()=>{this.forceUpdate()})
            }
        }, 1000);
    }

    gotoLocationScreen(){
        this.props.navigation.navigate('Location')
    }

    changeText(value){
        console.log(value);
        this.setState({ text2: value },()=>{
            if(this.state.text2.length == 4){
                this.setState({showloading:true},()=>{
                    setTimeout(() => {
                        this.setState({showloading:false},()=>{
                            this.gotoLocationScreen();
                        })
                    }, 2000);
                })
            }
        })
    }

    resendFunction(){
        this.setState({timecount:30})
    }

render(){

  return (
    <KeyboardAvoidingView style={styles.container}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <View style={styles.mainView}>
                    <Text style={styles.titleText}>Enter Verification code</Text>
                    <Text style={styles.subtitleText}>We have sent you a 4 digit verification code on </Text>
                    <Text style={styles.numberstyle}>+91 9331855828</Text>
                    {/* OTP text view example : https://www.npmjs.com/package/react-native-otp-textinput */}
                    <View style={{top:30}}>
                        <OTPTextView
                            containerStyle={styles.textInputContainer}
                            handleTextChange={(text) =>{this.changeText(text)}}
                            textInputStyle={styles.roundedTextInput}
                            inputCount={4}
                            tintColor={'#1A73E8'}
                            keyboardType={'numeric'}
                        />
                    </View>
                    <View style={{paddingTop:20}}>
                        {this.state.timecount != 0 ? 
                            <Text style={{textAlign:'center', fontSize:12, color:'#6A9955'}}>
                                {this.state.timecount? this.state.timecount.toString().length >1 ? '00:'+this.state.timecount : '00:0'+this.state.timecount : "00:00"}
                            </Text>
                        :
                            <TouchableOpacity onPress={()=>{this.resendFunction()}}>
                                <Text style={{textAlign:'center', fontSize:12, color:'#6A9955'}}>
                                    Resend
                                </Text>
                            </TouchableOpacity>
                            
                        }
                        
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
    </KeyboardAvoidingView>
  );
}
}

VerifyPhonenumberScreen.navigationOptions = {
    title: 'Verify phone number',
    // header: null,
};


const styles = StyleSheet.create({
    container: { flex: 1,backgroundColor: '#fff'},
    
    mainView:{ flex:1,flexDirection:"column" },

    textInputContainer: {
        marginBottom: 20,
        justifyContent:"center",
        flexWrap:"wrap"
        
      },
      roundedTextInput: {
        borderRadius: 6,
        borderWidth: 1,
        borderBottomWidth: 1,
        height:40,
        width:40
      },


      titleText:{fontSize:16,paddingTop:10,textAlign:"center",fontWeight:"bold",marginTop:30},
      subtitleText:{fontSize:13,paddingTop:10,textAlign:"center"},
      numberstyle:{fontSize:14,paddingTop:5,textAlign:"center",fontWeight:"bold", letterSpacing:1},
  

      /* Loading */
      loadingView: {
        position:"absolute",
        top:Dimensions.get('window').height/2
    },
});