import React, { useRef, useEffect } from 'react';
import { StyleSheet, Animated, View } from 'react-native';

const Stagger = () => {
    const firstOpacity = useRef(new Animated.Value(0)).current;
    const secondOpacity = useRef(new Animated.Value(0)).current;
    const thirdOpacity = useRef(new Animated.Value(0)).current;

    // The stagger allows a time which is the gap between each animation.
    useEffect(() => {
        Animated.stagger(300, [
            Animated.timing(firstOpacity, {
                toValue: 1,
                useNativeDriver: true
            }),
            Animated.timing(secondOpacity, {
                toValue: 1,
                useNativeDriver: true
            }),
            Animated.timing(thirdOpacity, {
                toValue: 1,
                useNativeDriver: true
            }),
            Animated.timing(firstOpacity, {
                toValue: 0,
                useNativeDriver: true
            }),
            Animated.timing(secondOpacity, {
                toValue: 0,
                useNativeDriver: true
            }),
            Animated.timing(thirdOpacity, {
                toValue: 0,
                useNativeDriver: true
            })
        ]).start()
    })

    return (
        <View style={styles.ctn}>
            <Animated.View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "orange",
                    marginBottom: 10,
                    opacity: firstOpacity,
                }}
            />

            <Animated.View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "orange",
                    marginBottom: 10,
                    opacity: secondOpacity,
                }}
            />  

            <Animated.View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "orange",
                    marginBottom: 10,
                    opacity: thirdOpacity,
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    ctn: {
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
})

export default Stagger;