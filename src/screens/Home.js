import React from "react";

import { SafeAreaView } from "react-native";

export default function Home ({children}) {

    return (

        <>

            <SafeAreaView>{children}</SafeAreaView>
        </>
    )
}