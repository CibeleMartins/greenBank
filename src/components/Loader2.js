import React from "react";

import {View, Image} from 'react-native';

import styles from "../styles/styles";


export default () => {

    return (
        <>
            <View
            style={styles.globalContainer}>

                <View
                style={styles.boxImgLoader}>
                    <Image
                    source={require('../assets/logo.png')}/>
                </View>
              
            </View>
        </>
    )
}