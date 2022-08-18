import React, { useState } from 'react';
import {
    View, 
    TextInput,
    Modal,
    StyleSheet,
    Button,
} from 'react-native';


function Todo_Input(props) {

    const [inp_text, setInpText] = useState('');

    function todoAdder() {
        if (inp_text.trim()) {
            props.todoHandler(inp_text);
        }
        setInpText('');
        props.setHidden();
    }

    function hide() {
        props.setHidden();
    }

    return (
        <Modal visible={props.modalVisible} animationType="slide">
            <View style={styles.topWrapper}>
                <View>
                    <TextInput 
                        style={styles.input}
                        placeholder="Enter your todo here!"
                        value={inp_text}
                        onChangeText={setInpText}
                    />
                </View>
                <View style={styles.btn_container}>
                    <View>
                        <Button
                            title="Add Todo"
                            onPress={todoAdder}
                            color="forestgreen"
                        />
                    </View>
                    <View style={styles.btn}>
                        <Button
                            title="Cancel"
                            color="firebrick"
                            onPress={hide}
                        />
                    </View>
                </View>
                
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    
    btn_container: {
        marginTop: 25,
        flexDirection: "row",
        width: '70%',
        justifyContent: "space-around",
    },
    input: {
        width: '80%',
        fontWeight: '600',
        fontSize: 20,
        textAlign: "center",
        padding: 5
    },
    topWrapper: {
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 100,
        flex: 1,
        backgroundColor: "antiquewhite"
    },
})

export default Todo_Input;

