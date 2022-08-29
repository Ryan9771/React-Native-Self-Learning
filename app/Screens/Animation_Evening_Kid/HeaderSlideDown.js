import React, { useRef } from 'react';
import { Animated, } from 'react-native';

const HeaderSlide = () => {
    
    const scrolling = useRef(new Animated.Value(0)).current;
    

    const move_y = scrolling.interpolate({
        inputRange: [50, 100],
        outputRange: [-100, 0],
        extrapolate: 'clamp',
    })

    
    return (
        <>
            <Animated.View 
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "tomato",
                    height: 80,
                    width: '100%',
                    transform: [
                        {translateY: move_y}
                    ]
                }}
            />
            <Animated.ScrollView 
                // Animated.event allows to connect gestures like scrolling etc.. to animated values by mapping them:
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: {
                                y: scrolling
                            },
                        }
                    }],
                    {useNativeDriver: true},
                )}
                style={{ flex: 1 }}
                scrollEventThrottle={16}
            />

        </>
    )
}

export default HeaderSlide;