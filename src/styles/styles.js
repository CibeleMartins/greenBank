import { StyleSheet, Dimensions } from "react-native";
import { multiply } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({

    globalContainer: {
        flex: 1,
        justifyContent:'center',
        flexDirection: 'column',
        backgroundColor: 'black',
    },

    containerLoader: {
        justifyContent:'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },

    imgLoader: {
        width: 400,
        height: 500, 
    },

    boxImgLoader: {
        alignItems: 'center',
        width: 200,
      
    },

    logoText: {
        width: 150,
        fontSize: 35,
        fontWeight: '400',
        letterSpacing: 1,
        color: 'white',
        position: 'relative',
        right: 20
    },

    containerTextLoader: {

        width: 150

    },

    touchable: {
        backgroundColor: '#c9e949',
        width: 90,
        height: 30,
        fontSize: 20,
        borderRadius: 10,
        justifyContent: 'center'
    },

    touchableText: {
        color: 'black',
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center'

    },

    motiViewTouchable: {
        alignItems: 'center'

    }

    
})



export default styles