import { createStackNavigator } from 'react-navigation';
import AddPhonenumberScreen from '../screens/AddPhonenumber';

//authentication stack for user before login
export const AuthStack = createStackNavigator({
    Signin: AddPhonenumberScreen
            
});