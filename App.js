import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signup from './screens/signup/Signup';
import Signin from './screens/signin/Signin';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './screens/home/Home';

const Drawer = createDrawerNavigator();

const TimerComponent = () => {
  // Implement your timer logic here
  // You can use useState, useEffect, and other React hooks
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    // Your timer logic (e.g., setInterval, setTimeout)
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <View style={{ marginRight: 15 }}>
      <Text style={{ color: 'white' }}>{timer} s</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            shadowColor: 'black',
          },
          drawerActiveBackgroundColor: '#3697e5',
          drawerActiveTintColor: "#FF9800",
          drawerInactiveTintColor: 'white',
          drawerContentStyle: {
            backgroundColor: '#3679e0'
          },
          headerTintColor: '#e6e6e6',
        }}
        initialRouteName='Home'
      >
        <Drawer.Screen 
          name="Home" 
          component={Home}
          options={{
            headerBackground: () =>  <LinearGradient
              colors={["#3697e5", "#3679e0"]}
              start={{ y: 1, x: 0.9 }}
              style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            />,
            headerTitle: 'Home',
            // headerRight: () => <TimerComponent />,
          }}
        />
        <Drawer.Screen 
          name="Signup" 
          component={Signup}
          options={{
            headerBackground: () =>  <LinearGradient
              colors={["#3697e5", "#3679e0"]}
              start={{ y: 1, x: 0.9 }}
              style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            />,
            headerTitle: '',
          }}
        />
        <Drawer.Screen 
          name="Signin" 
          component={Signin}
          options={{
            headerBackground: () =>  <LinearGradient
              colors={["#3697e5", "#3679e0"]}
              start={{ y: 1, x: 0.9 }}
              style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            />,
            headerTitle: '',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
