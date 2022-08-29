import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TextInput, Button} from 'react-native';

const EditTask = (props) => {

    const [input, setInput] = useState(props.task);

    return (
        <Modal 
            visible={props.isVisible} 
            animationType="slide" 
        >
            <View style={styles.modal}>
                <Text style={styles.header}>Modify your Task!</Text>
                <View style={styles.display}>
                    <TextInput 
                        value={input}
                        onChangeText={setInput}
                        style={styles.inp}
                        multiline={true}
                        numberOfLines={5}
                        editable={true}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button 
                            onPress={() => {
                                if (input.trim()) {
                                    props.changeTask(props.id, input);
                                    props.render()
                                }
                                props.setVisible(false);
                            }}
                            disabled={!(input.trim())}
                            title="Edit Task"
                            color="green"
                        />
                    </View>
                    <View style={styles.btn}>
                        <Button 
                            onPress={() => {
                                props.setVisible(false);
                                setInput(props.task);
                            }}
                            title="Cancel"
                            color="red"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: "center",
        paddingTop: 80,
        backgroundColor: "linen"
    },
    header: {
        fontWeight: "bold",
        fontSize: 20
    },
    display: {
        marginTop: 40,
        width: '80%',
        height: '20%',
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 20,
        justifyContent: "center"
    },
    inp: {
        fontSize: 18,
        height: '100%',
        width: '100%',
        paddingTop: 20,
        textAlign: "center"
    },
    btnContainer: {
        marginTop: 20,
        flexDirection: "row",
        height: 40,
        width: '80%',
    },
    btn: {
        flex: 1
    }

})

export default EditTask;