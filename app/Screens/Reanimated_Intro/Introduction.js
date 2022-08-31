import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useSharedValue, 
    useAnimatedStyle, 
    withTiming, 
    withSpring, 
    withRepeat,
} from 'react-native-reanimated';


/*

- Reanimated allows us to work purely on the UI thread, hence preventing lag from the 
    'animated' API

*/

export default function App() {

    // Allows us to handle a value that can be completely handled by the UI thread.
    // Can be any data type
    const progress = useSharedValue(1);
    const scale = useSharedValue(1.5);
    const rot = useSharedValue('0deg');

    // Useful when we want a style to depend on javascript states, eg: 'progress' here
    // Note: If we want to use a function to handle the shared value calculation, you 
    //  can just create a function above (even outside the default func), and add a line " 'worklet'; " 
    //  inside the function. This will handle calculations on the UI
    const reanimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: progress.value,
            transform: [
                {scale: scale.value},
                {rotate: rot.value},
            ],
            borderRadius: (progress.value * 100) / 2 
        }
    }, [])

    // withTiming(valueTo, { duration: timeinms }) -> Equivalent to Animation.timing
    // withSpring is also a very good function, since size etc.. affects it
    // Note: You may even repeat shared transition values instead of creating new ones
    // withRepeat(the animation, num_times (-1 for infinite), reverse?)
    useEffect(() => {
        progress.value = withSpring(0.5, { duration: 3000 } );
        scale.value = withRepeat(withSpring(0.9, { duration: 3000 }), 3, true);
        rot.value = withRepeat(withSpring('180deg', { duration: 1000 }), 2, true);
    }, []);

    return (
        <View style={styles.ctn}>
            <Animated.View style =
                {[{
                    height: 100, 
                    width: 100,
                    backgroundColor: "blue",
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