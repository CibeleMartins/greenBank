import React from "react";

import {View, Text, TouchableOpacity} from 'react-native';

import { MotiView, MotiText, MotiImage } from "moti";

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
                        opacity:0,
                    }}

                    animate={{
                        opacity: 1
                    }}

                    transition={{
                        type: 'timing',
                        duration: 3000
                    }}
                    style={styles.boxImgLoader}>
                        <MotiImage
                        from={{
                            rotate: '0deg'
                        }}

                        animate={{
                            rotate: '-90deg'
                        }}
                        transition={{
                            type: 'timing',
                            duration: 4000
                        }}
                        style={{width: 150, height: 450}}
                        source={require('../assets/logoRotate.png')}/>
                    </MotiView>

                    <MotiView
                    from={{
                        width: 150
                    }}

                    animate={{
                        width: 0
                    }}

                    transition={{
                        type: 'timing',
                        duration: 3000
                    }}
                    style={styles.containerTextLoader}>
                        <MotiText
                        from={{
                            opacity: 1
                        }}

                        animate={{
                           opacity: 0
                        }}

                        transition={{
                            type: 'timing',
                            duration: 1500
                        }}
                        style={styles.logoText}>
                            Green
                            Bank 
                        </MotiText>
                    </MotiView>

                </View>

                             
                <MotiView
                style={styles.motiViewTouchable}
                   from={{
                    opacity: 0
                   }}
                   animate={{
                    opacity: 1
                   }}
                   transition={{
                    type:'timing',
                    duration: 9800
                   }}>
                    <TouchableOpacity
                        style={styles.touchable}>
                        <Text 
                        style={styles.touchableText}>
                            For You
                        </Text>
                    </TouchableOpacity>
                   </MotiView>

              
            </View>
        </>
    )
}