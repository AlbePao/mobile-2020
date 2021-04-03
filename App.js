import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from './views/Home';
import { UserDetail } from './views/UserDetail';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='Home' component={Home} />
        <RootStack.Screen name='UserDetail' component={UserDetail} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
