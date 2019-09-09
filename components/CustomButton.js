import React from 'react';
import {
    TouchableOpacity, View,Text
  } from 'react-native';

//make a compontent
const CustomButton = ({children, onPress}) =>{
   return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
            {children}
        </Text>
    </TouchableOpacity>
    
   );

};

const styles = {
    textStyle:{
        alignSelf:'center',
        fontSize:14,
        fontWeight:'600',
        paddingTop:8,
        paddingBottom:8,
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonStyle:{
        borderRadius:30,
        borderWidth:1,
        borderColor:'#000',
        // width:130

    }
}

export default CustomButton;

/* Example */
/*
<CustomButton
    buttonValue={this.state.username}
    buttonPress={()=>{ this.callFun()}}
/>
*/