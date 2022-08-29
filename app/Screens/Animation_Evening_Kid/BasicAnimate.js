import { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Easing, Text } from 'react-native';

// Default representation of translating an item
const Slide = () => {
    const move_x = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(move_x, {
            toValue: 100,
            duration: 1000,
            delay: 1500,
            useNativeDriver: true,
        }).start();
    }, []);

    return(
        <Animated.View
            style={{
                width: 80,
                height: 80,
                backgroundColor: "orange",
                transform: [{translateX: move_x}],
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text style={styles.text}>Default</Text>
        </Animated.View>
    );
}

// Using the Easing.bounce property to make the box bounce
const Bounce = () => {
    const move_x = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(move_x, {
            toValue: 100,
            easing: Easing.bounce,
            delay: 1500,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    return(
        <Animated.View
            style={{
                width: 80,
                height: 80,
                backgroundColor: "orange",
                transform: [{translateX: move_x}],
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text style={styles.text}>Bounce</Text>
        </Animated.View>
    );
}

// Uses Animated.spring (but honestly cant tell the diff)
const Spring = () => {
    const move_x = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.spring(move_x, {
            toValue: 100,
            delay: 1500,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    return(
        <Animated.View
            style={{
                width: 80,
                height: 80,
                backgroundColor: "orange",
                transform: [{translateX: move_x}],
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text style={styles.text}>Spring</Text>
        </Animated.View>
    );
}

const App = () => {

    return (
        <View style={styles.container}>
            <Slide />
            <Bounce />
            <Spring />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    text: {
        fontSize: 14
    }
})

export default App;