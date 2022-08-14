import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import colors from "../config/colors";

const Chair = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.red}></View>
                <View style={styles.blue}></View>
            </View>
            <Image resizeMode="contain" source={require("../../Images/chair.jpg")} style={styles.chair}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1
    },
    top: {
        justifyContent: "space-between",
        paddingHorizontal: 35, 
        flexDirection: "row",
        marginTop: 50,
    },
    red: {
        width: 40,
        height: 40,
        backgroundColor: colors.primary
    },
    blue: {
        width: 40,
        height: 40,
        backgroundColor: colors.secondary
    },
    chair: {
        height: '80%',
        marginTop: 50,
        width: "100%"
    }

})

export default Chair;