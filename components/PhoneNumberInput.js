import React from 'react';
import {
    TouchableOpacity,
    View,
    TextInput,
    Dimensions,
    Image
  } from 'react-native';

//make a compontent
const CustomPhoneNumberInput = ({value, onChangeText,editable, imagePress,countryImage}) =>{
   return (
    <View style={styles.subView}>
        <View style={styles.subItem_one}>
            <View style={styles.subItem_one_mainView}>
                <TouchableOpacity onPress={imagePress }>
                    <Image
                        style={styles.subItem_one_mainView_image}
                        source={countryImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.subItem_two}>
            <TextInput 
                style = {styles.subItem_two_input}
                underlineColorAndroid = "transparent"
                placeholder = "Mobile Number"
                placeholderTextColor = "#AAAAAA"
                autoCapitalize = "none"
                keyboardType={'numeric'}

                onChangeText={onChangeText}
                value={value}
                editable={editable}
            />
        </View>
    </View>
   );

};

const styles = {
    subView:{
        flexDirection:"row",justifyContent:"center",borderWidth:1,padding:5,paddingLeft:0,marginLeft:20,
        marginRight:20,borderColor:'#AAAAAA',borderRadius:3
    },
    subItem_one:{ height: 46,flexDirection:"column", justifyContent:"center" },
    subItem_one_mainView:{flexDirection:"row",justifyContent:"center"},
    subItem_one_mainView_image:{height:40,width:40,borderRadius:40},
    subItem_two:{
        height:46,marginLeft:10,flexDirection:"column",justifyContent:"center",
        width:((Dimensions.get('window').width-80)-50),
    },
    subItem_two_input: {
        paddingLeft:10, borderLeftColor:'#AAAAAA', borderLeftWidth:1,height:40, 
        fontWeight:"bold", letterSpacing:1, fontSize:16, width:((Dimensions.get('window').width-90)-50)
    },
}

export default CustomPhoneNumberInput;

/* Example */
/*
<CustomPhoneNumberInput
    value={this.state.username}
    onChangeText={text => this.setState({username:text})}
    imagePress={()=>{ this.callFun()}}
    countryImage={this.state.countryDetails.image}
/>
*/