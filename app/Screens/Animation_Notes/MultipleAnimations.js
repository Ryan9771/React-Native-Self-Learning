import React, { useEffect, useRef }from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

// Animation in sequence
const Sequence = () => {

    const translation = useRef(new Animated.ValueXY({x:0, y:0})).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(translation.y, {
                toValue: 100,
                duration: 400, 
                useNativeDriver: true
            }),
            Animated.timing(translation.x, {
                toValue: 100,
                duration: 1000,
                delay: 1000,
                easing: Easing.bounce, 
                useNativeDriver: true
            })
        ]).start(); // we call start on the sequence rather than individually

    }, []);

    return (
        <View style={styles.ctn}>
            <Animated.View 
                style={{
                    width: 80,
                    height: 80,
                    backgroundColor: "orange",
                    transform: [
                        {translateX: translation.x}, 
                        {translateY: translation.y},
                    ]
                }}>

            </Animated.View>
        </View>
    );

}

// Animation in parallel (as long as they have the same delay, they'll move 
//   in sync. Can adjust this accordingly)
const Parallel = () => {

    const translation = useRef(new Animated.ValueXY({x:0, y:0})).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(translation.y, {
                delay: 1000,
                toValue: 100,
                useNativeDriver: true
            }),
            Animated.timing(translation.x, {
                toValue: 100,
                delay: 1000,
                useNativeDriver: true
            })
        ]).start(); // we call start on the sequence rather than individually

    }, []);

    return (
        <View style={styles.ctn}>
            <Animated.View 
                style={{
                    width: 80,
                    height: 80,
                    backgroundColor: "orange",
                    transform: [
                        {translateX: translation.x}, 
                        {translateY: translation.y},
                    ]
                }}>

            </Animated.View>
        </View>
    );

}

const styles = StyleSheet.create({
    ctn: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        backgroundColor: "black"
    }
})

export default Parallel;
