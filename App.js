import 'react-native-gesture-handler';
import React , {useState} from 'react'
import {
  Text , SafeAreaView , StatusBar
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Header from './Screens/Header'
import Search from './Screens/Search'
import Home from './Screens/Home'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator()

const App = ()=>{

  return(
    <>
      <NavigationContainer>
        <Tab.Navigator
        >
          <Tab.Screen name="Home" component={Home} initialParams={{city:"london"}} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen name="Search" component={Search} 
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="magnify" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;