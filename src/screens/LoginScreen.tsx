import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { STYLES } from './STYLES';

const LoginScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: STYLES.light_2_color,
padding: 1},

  });


  /**
   * 1. Title
   * 2. 2 Inputs
   * 3. forgot password
   * 4.Login Button
   * 5.dosent have account ?
   * 6. Facebook/google
   * 7.Loading bar
   * 
   * 
   */

  export default LoginScreen;