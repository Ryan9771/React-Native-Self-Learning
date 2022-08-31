import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';


/*

- Reanimated allows us to work purely on the UI thread, hence preventing lag from the 
    'animated' API

*/

export default function App() {

    // Allows us to handle a value that can be completely handled by the UI thread.
    // Can be any data type
    const progress = useSharedValue(1);

    // Useful when we want a style to depend on javascript states, eg: 'progress' here
    const reanimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: progress.value
        }
    }, [])

    // withTiming(valueTo, { duration: timeinms })
    useEffect(() => {
        progress.value = withTiming(0, { duration: 5000} );
    }, []);

    return (
        <View style={styles.ctn}>
            <Animated.View style =
                {[{
                    height: 100, 
                    width: 100,
                    backgroundColor: "blue",
                    borderRadius: 10
                }, reanimatedStyle]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ctn: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center"
    }
})