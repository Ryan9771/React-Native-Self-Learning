import React, { useState } from 'react';
import {
    View, 
    TextInput,
    Modal,
    StyleSheet,
    Button
} from 'react-native';


function Todo_Input(props) {

    const [inp_text, setInpText] = useState('');

    function todoAdder() {
        if (inp_text.trim()) {
            props.todoHandler(inp_text);
        }
        setInpText('');
    }

    return (
        <View style={styles.topWrapper}>
            <TextInput 
                style={styles.input}
                placeholder="Enter your todo here!"
                value={inp_text}
                onChangeText={setInpText}
            />
            <Button
                title="Add Todo"
                style={styles.btn}
                onPress={todoAdder}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        flex:5
    },
    input: {
        flex: 2,
        fontWeight: '600',
        fontSize: 16
    },
    topWrapper: {
        flexDirection: "row",
    },
})

export default Todo_Input;

