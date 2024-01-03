// Tabs.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import Populer from '../../tabs/Populer';
import Science from '../../tabs/Science';
import Mathematics from '../../tabs/Mathematics';
import Computer from '../../tabs/Computer';

const Tab = createMaterialTopTabNavigator(); 

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white', 
          elevation: 0,
          borderTopWidth: 0,
          borderRadius: 50
        },
        labelStyle: {
          textTransform: 'none', 
        },
        indicatorStyle: {
          backgroundColor: 'blue', 
        },
      }}
    >
      <Tab.Screen
        name="Populer"
        component={Populer}
      />
      <Tab.Screen
        name="Science"
        component={Science}
      />
      <Tab.Screen
        name="Mathematics"
        component={Mathematics}
      />
      <Tab.Screen
        name="Computer"
        component={Computer}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
