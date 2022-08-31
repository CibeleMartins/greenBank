import React from 'react';
import { NativeBaseProvider} from "native-base";

import { Routes } from './routes';

export default function App () {

  return (

    
    <NativeBaseProvider>
      
         <Routes/>
   
    </NativeBaseProvider>
    
  )
}