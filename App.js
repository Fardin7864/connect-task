import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signup from './screens/signup/Signup';
import Signin from './screens/signin/Signin';
import { LinearGradient } from 'expo-linear-gradient';

const Drawer = createDrawerNavigator();

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
            }
          }}
        >
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
