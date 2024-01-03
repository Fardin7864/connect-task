// Tabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Populer from '../../tabs/Populer';
import Science from '../../tabs/Science';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Populer"
          component={Populer}
          options={{
            tabBarLabel: 'Populer',
            tabBarIconStyle:{
                display: 'none'
            },
          }}
        />
        <Tab.Screen
          name="Science"
          component={Science}
          options={{
            tabBarLabel: 'Science',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default Tabs;
