import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RotasLoginStack from './src/components/rotasStack/RotasLoginStack';

export default function App() {
  return(
    <NavigationContainer>

      <StatusBar barStyle="light-content" backgroundColor="40e0d0" />

      <RotasLoginStack />

    </NavigationContainer>
  );
}