import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

// Potential Idea -> Upon press, intrapolate width of coloured box going outwards until long press time
const Interpolation = () => {

    const moveY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(moveY, {
            toValue: 200,
            useNativeDriver: false, // we use false here because it doesn't support changing background colours. This will slow it down
            duration: 2000
        }).start();
    }, [])

    return (
        <View style={styles.ctn}>
            <Animated.View 
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: moveY.interpolate({
                        inputRange: [0, 100, 200],
                        outputRange: ["red", "orange", "yellow"]
                    }),
                    transform: [
                        {translateY: moveY}, // Translates in x direct
                        {rotate: moveY.interpolate({
                            inputRange: [0, 200], // Input is your moveY value -> From 0 to 200. If you put 0 to 100 then it'll rotate twice in its movement since moveyY is 200
                            outputRange: ['0deg', '360deg'],
                        })}
                    ], 
                    opacity: moveY.interpolate({ // scales opacity by move.interpolate. outputRange is the min and max value of opacity you want. You can add more than 2 values for multiple stages. Eg: opacity: 1 -> 0 -> 1
                        inputRange: [25, 50, 100],
                        outputRange: [1, 0.3, 1],
                        extrapolateLeft: 'clamp',
                        extrapolateRight: 'clamp', // tells it to not guess what the values will be from 0-25 and from 100+
                    }) 
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ctn: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    }
})

export default Interpolation;