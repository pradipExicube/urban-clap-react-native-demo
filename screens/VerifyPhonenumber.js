import React, {Component} from 'react';
import {
  StyleSheet,View,StatusBar,Dimensions,Text,ActivityIndicator
} from 'react-native';


export default class VerifyPhonenumberScreen extends Component {
     
    constructor(props){
        super(props);
    }    

render(){

  return (
    <View style={styles.container}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <View style={styles.mainView}>
                    <Text>This is veriify phone number</Text>
            </View>
    </View>
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

  
});
