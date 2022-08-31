import React from "react";

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Loading from '../screens/Loading';

const {Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes() {

    return (

        <Navigator>
            <Screen 
            name="Loading"
            component={Loading}/>

            <Screen 
            name="Home"
            component={Home}/>
        </Navigator>
    )
}