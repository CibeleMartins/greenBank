import React from 'react'
// import {Text} from 'react-native'
import { NativeBaseProvider} from "native-base";
// import Home from './screens/Home';

import { Routes } from './routes'

export default function App () {

  return (

    
    <NativeBaseProvider>
      <Routes></Routes>
    </NativeBaseProvider>
    
  )
}