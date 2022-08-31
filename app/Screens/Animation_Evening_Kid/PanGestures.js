import React, { useRef } from 'react';
import { 
    StyleSheet, 
    View, 
    Animated, 
    PanResponder, 
    Image, 
    useWindowDimensions,
    Dimensions
} from 'react-native';

const img = 'https://vignette.wikia.nocookie.net/joke-battles/images/4/40/18360-doge-doge-simple.jpg/revision/latest?cb=20151209161638';

function pointsDistance([xA, yA], [xB, yB]) {
    return Math.sqrt(
        Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2)
    );
}

const image_nav = () => { 

    const dimensions = useWindowDimensions();
    
    const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    const scale = useRef(new Animated.Value(1)).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                // Retrieves the number of touches
                const activeTouches = event.nativeEvent.changedTouches.length;
                if (activeTouches === 1) {
                    // The distance between the origin and current touch positions
                    pan.setValue({
                        x: gestureState.dx,
                        y: gestureState.dy,
                    })
                } else if (activeTouches >= 2) {
                    const touches = event.nativeEvent.changedTouches;

                    const touchA = touches[0];
                    const touchB = touches[1];

                    const distance = pointsDistance(
                        [touchA.pageX, touchA.pageY],
                        [touchB.pageX, touchB.pageY]
                    );

                    const screenMovedPercents = distance / dimensions.width;
                    scale.setValue(1 + screenMovedPercents * 3);
                }
            },
            onPanResponderRelease: (event, gestureState) => {
                Animated.parallel([
                    Animated.spring(pan, {
                        toValue: {
                            x: 0,
                            y: 0
                        },
                        useNativeDriver: true,
                    }),
                    Animated.spring(scale, {
                        toValue: 1,
                        useNativeDriver: true,
                    }) 
                ]).start();
            },
        })
    ).current;


    return (
        <View style={styles.wrapper}>
            <Animated.Image 
                {...panResponder.panHandlers}
                source={{ uri: img }}
                style= {{
                    height: 200,
                    width: '90%',
                    borderRadius: 10,
                    transform: [
                        {
                            translateX: pan.x
                        },
                        {
                            translateY: pan.y
                        },
                        { scale }
                    ]
                }}

            />
        </View>
    )
 }

 const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
 })

 export default image_nav; 