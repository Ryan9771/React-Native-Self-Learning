import React, { useRef } from 'react';
import { Animated, useWindowDimensions, View } from 'react-native';

const Gestures = () => {

    const touch = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const dimensions = useWindowDimensions();

    // See below why we use the CURSOR_HALF_SIZE
    const CURSOR_SIZE = 30;
    const CURSOR_HALF_SIZE = 15;

    return (
        <View 
            style={{ flex: 1, 
                backgroundColor: "black", 
            }}
            // Here we have to set this to true so that the gesture handler knows that it is supposed to be 
            //   responsive to touch
            // https://reactnative.dev/docs/gesture-responder-system
            onStartShouldSetResponder={() => true}
            onResponderMove={(event) => {
                touch.setValue({
                    x: event.nativeEvent.locationX,
                    y: event.nativeEvent.locationY,
                })
            }}
            onResponderRelease={() => {
                Animated.spring(touch, {
                    toValue: {
                        x: dimensions.width / 2,
                        y: dimensions.height / 2, 
                    },
                    useNativeDriver: false,
                }).start();
            }}
        >
            <Animated.View style={{
                backgroundColor: "orange",
                width: CURSOR_SIZE,
                height: CURSOR_SIZE,
                borderRadius: 50,
                position: "absolute",
                // We subtract finger pos - half ball size because the top left corner of the ball would originally
                //  appear at our finger, but we want our finger to be at the center of the ball
                top: Animated.subtract(touch.y, CURSOR_HALF_SIZE),
                left: Animated.subtract(touch.x, CURSOR_HALF_SIZE),
            }}
            />
        </View>
    )
}

export default Gestures;