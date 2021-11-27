import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import contato from '../../views/contato/contato';
import adotar from '../../views/adotar/adotar';
import doar from '../../views/doar/doar';
import RotasPrincipalStack from '../rotasStack/RotasPrincipalStack';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
    return(
      <Drawer.Navigator initialRouteName='Inicial'>
      <Drawer.Screen name="Inicial" component={RotasPrincipalStack} />
      <Drawer.Screen name="adotar" component={adotar} />
      <Drawer.Screen name="doar" component={doar} />
      <Drawer.Screen name="contato" component={contato} />
    </Drawer.Navigator> 
    );
  }

  export default RotasDrawer;