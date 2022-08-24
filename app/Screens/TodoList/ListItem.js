import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Modal } from 'react-native';

import EditTask from './EditTask';

function ListItem(props) {

    const[pressedIn, setPressedIn] = useState(false);
    const[modalVisible, setModalVisible] = useState(false);

    function handlePress() {
        if (pressedIn) {
            setPressedIn(false);
        } else {
            setPressedIn(true);
        }
    }

    function onPressHandler() {
        setModalVisible(true);
    }

    return (
        <View>
            <Pressable
                style={(item) => [item.pressed ? styles.pressedIn : {backgroundColor:"white"}, styles.default]}
                onPressIn={handlePress}
                onPressOut={handlePress}
                onPress={onPressHandler}
                onLongPress={() => props.deleteHandler(props.id)}
            >
                <Text style={pressedIn ? styles.pressedText : styles.text}>{props.task}</Text>
            </Pressable>
            <EditTask 
                isVisible={modalVisible} 
                changeTask={props.changeTask} 
                id={props.id}
                task={props.task}
                setVisible={setModalVisible}
                render={props.render}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    default: {
        width: '100%',
        height: 50,
        marginVertical: 8,
        alignContent: "flex-start",
        justifyContent: "center",
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 15
    },
    text: {
        fontWeight: "400",
        fontSize: 18
    },
    pressedIn: {
        opacity: 0.5,
        backgroundColor: "black"
    },
    pressedText: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white"
    }
})

export default ListItem;