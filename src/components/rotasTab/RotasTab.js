import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import contato from '../../views/contato/contato';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const rotasTab = () => {
    return(
      <Tab.Navigator
          tabBarOptions={
            {
              labelStyle: { fontSize: 24 },
              style: {backgroundColor: '#FFFFFF'},
              activeTintColor: '#000000'
            }
          }
        >
          <Tab.Screen name="Inicial" component={RotasDrawer} />
          <Tab.Screen name="Contato" component={contato} />
        </Tab.Navigator>
    );
  }

  export default rotasTab;