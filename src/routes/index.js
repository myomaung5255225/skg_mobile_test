import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ContactScreen from '../components/screens/contact';
import Home from '../components/screens/Home';

const rootStack = createNativeStackNavigator();


export const RootNavigator = ()=>{
    return(
        <NavigationContainer>
             <rootStack.Navigator>
                 <rootStack.Screen name='home_scrren' component={Home} />
                 <rootStack.Screen name='contact_screen' component={ContactScreen} />
             </rootStack.Navigator>
        </NavigationContainer>
    )
}