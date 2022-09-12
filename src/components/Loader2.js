import React from "react";

import {View, Image, Text} from 'react-native';

import { MotiView } from "moti";

import styles from "../styles/styles";


export default () => {

    return (
        <>
            <View
            style={styles.globalContainer}>

                <View
                style={styles.containerLoader}>

                    <MotiView
                    from={{
                        opacity:0
                    }}

                    animate={{
                        opacity: 1
                    }}

                    transition={{
                        type: 'timing',
                        duration: 3000
                    }}
                    style={styles.boxImgLoader}>
                        <Image
                        style={{width: 150, height: 450}}
                        source={require('../assets/logoRotate.png')}/>
                    </MotiView>

                    <View
                    style={styles.containerTextLoader}>
                        <Text
                        style={styles.logoText}>
                            Green
                            Bank 
                        </Text>
                    </View>

                </View>
              
            </View>
        </>
    )
}