import React from 'react';
import { TouchableOpacity, View,Text,Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//make a compontent
const CustomButtonIcon = ({children, onPress,iconName,backgroundColor,borderColor,TextColor,iconColor,iconSize}) =>{
   return (
    <TouchableOpacity style={[styles.buttonStyle,{borderColor:borderColor,backgroundColor:backgroundColor}]} onPress={onPress}>
        <View style={styles.viewOne}>
            <Ionicons style={styles.viewOneIcon} name={iconName} size={iconSize} color={iconColor} />
        </View>
        <View style={styles.viewTwo}>
            <Text style={[styles.viewTwoText,{color:TextColor}]}>{children}</Text>
        </View>
    </TouchableOpacity>


    
   );

};

const styles = {
    buttonStyle:{
        flexDirection:'row',
        width:Dimensions.get('window').width-70,
        justifyContent:"center",
        borderWidth:1,
        alignSelf:"center",
        paddingTop:9,
        paddingBottom:9,
        borderRadius:5
    },
    viewOne:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    viewOneIcon:{
        paddingRight:10
    },
    viewTwo:{
        flex:2,
        flexDirection:"column",
        justifyContent:"center"
    },
    viewTwoText:{
        color:'#fff'
    }
}

export default CustomButtonIcon;

/* Example */
/*
<CustomButton
    buttonValue={this.state.username}
    buttonPress={()=>{ this.callFun()}}
/>
*/