import React from "react";

import {View, Image, Text} from 'react-native';

import styles from "../styles/styles";


export default () => {

    return (
        <>
            <View
            style={styles.globalContainer}>

                <View
                style={styles.containerLoader}>

                    <View
                    style={styles.boxImgLoader}>
                        <Image
                        style={{width: 150, height: 450}}
                        source={require('../assets/logoRotate.png')}/>
                    </View>

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