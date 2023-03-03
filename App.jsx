import { StyleSheet } from 'react-native';
import LoginScreen from './client/screens/playerSignInAndSignUp/LoginScreen.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './client/screens/playerSignInAndSignUp/SignUpScreen.jsx'
import React from 'react';
import HomeSceen from './client/screens/playerSignInAndSignUp/HomeSceen.jsx';

const Stack = createStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'black',
            headerTitleAlign:'center'
          }}
        >
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: 'Login',
              headerShown:"LoginScreen"}}
          />
          <Stack.Screen
            name='SignUpScreen'
            component={SignUpScreen}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeSceen}
            options={{
              title: 'Home',
              headerShown:"Home"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
