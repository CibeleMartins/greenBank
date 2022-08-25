import React from 'react';

import {View, Image, Text, Animated, Easing} from 'react-native';

import styles from '../styles/styles'

export default () => {

    let rotateValueHolder = new Animated.Value(0)

    const startImageRotateFunction = () => {

        rotateValueHolder.setValue(0);

        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start(()=> startImageRotateFunction())

    }

    const RotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
        
    })

    startImageRotateFunction()
    return (

        <>
        <View
        style={styles.globalContainer}>
            
            <View
            style={styles.boxImgLoader}>

            <Animated.Image 
            source={require('../assets/logo.png')}
            style={[styles.imgLoader, {transform: [{rotate: RotateData}]}]}/>

            </View>
           
        </View>
        </>
    )
}