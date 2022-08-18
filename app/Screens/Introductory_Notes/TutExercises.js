import React from 'react';
import { Text, Image, View, StyleSheet, ImageBackground } from 'react-native';

import colors from "../../config/colors";

const Background = () => {
    return (
        <ImageBackground
            source={require("../../Images/background.jpg")}
            style={styles.background}
        >
            <View style={styles.topBox}>
                <Image source={require('../../Images/logo-red.png')} style={styles.logo}/>
                <Text>Sell what you don't need</Text>
            </View>
            <View style={styles.btmBox}>
                <View style={styles.red}></View>
                <View style={styles.aquamarine}></View>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'space-between'
    },
    red: {
        width: '100%',
        flex: 1,
        backgroundColor: colors.primary
    },
    aquamarine: {
        backgroundColor: colors.secondary,
        width: '100%',
        flex: 1
    },
    logo: {
        width: 80,
        height: 80
    },
    btmBox: {
        height: '15%'
    },
    topBox: {
        marginTop: 60,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Background;
