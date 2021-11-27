import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import inicial from '../../views/inicial/inicial';
import adotar from '../../views/adotar/adotar';
import doar from '../../views/doar/doar';
import estiloRotasStack from './estiloRotasStack';

const Stack = createStackNavigator();

const RotasPrincipalStack = () => {
    return(
        <Stack.Navigator initialRouteName="Inicial">

        <Stack.Screen 
        name="Inicial" 
        component={inicial}
        options={
          {
            cardStyle: estiloRotasStack.screenInicial,
            headerShown: false
          }
        }
        />
        <Stack.Screen 
        name="Adotar"
        component={adotar} 
        options={
          {
            cardStyle: estiloRotasStack.screenAdotar,
            headerShown: false
          }
        }
        />
        <Stack.Screen 
        name="Doar" 
        component={doar} 
        options={
          {
            cardStyle: estiloRotasStack.screenDoar,
            headerShown: false
          }
        }
        />
    </Stack.Navigator>
    );
}
export default RotasPrincipalStack;