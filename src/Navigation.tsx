// In App.js in a new project

import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import { STYLES } from './screens/STYLES';



const Stack = createNativeStackNavigator();

const Navigation = () => {

    const headerStyle: React.CSSProperties = {
        backgroundColor: Platform.OS == 'android' ? STYLES.primary : 'white',
    }

    


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: headerStyle,headerTitleStyle: {color: Platform.OS === 'android' ? STYLES.light_1_color : STYLES.primary},headerTitleAlign: 'center'}}>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;