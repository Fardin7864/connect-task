import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signup from './screens/signup/Signup';
import Signin from './screens/signin/Signin';

const Drawer = createDrawerNavigator();

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Signup' component={Signup}/>
        <Drawer.Screen name='Signin' component={Signin}/>
      </Drawer.Navigator>
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
