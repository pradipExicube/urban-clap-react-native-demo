import { createStackNavigator } from 'react-navigation';
import AddPhonenumberScreen from '../screens/AddPhonenumber';
import VerifyPhonenumberScreen from '../screens/VerifyPhonenumber';

//authentication stack for user before login
export const AuthStack = createStackNavigator({
    Signin: AddPhonenumberScreen,
    Verifyphone:VerifyPhonenumberScreen        
},{
    initialRouteName: 'Signin',
});