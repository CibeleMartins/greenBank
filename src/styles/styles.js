import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({

    globalContainer: {
        flex: 1,
        justifyContent:'center',
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
        fontSize: 35,
        fontWeight: '400',
        letterSpacing: 1,
        color: 'white',
        position: 'relative',
        right: 20
    },

    containerTextLoader: {

        width: 150

    }

    
})



export default styles