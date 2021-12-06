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
    container: {flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: STYLES.light_2_color}
  });

  export default LoginScreen;