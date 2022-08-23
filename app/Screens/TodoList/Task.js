import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import ListItem from './ListItem';


const Task = () => {

    const [inp_text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    
    function sendText() {
        if (inp_text.trim()) {
            setTodos([...todos, inp_text]);
        }
        setText("");
    }
    
    return (
        <View style={styles.screen}>
            <View style={styles.topCnt}>
                <Text style={styles.taskHeader}>Today's Tasks</Text>
                <View style={styles.fltList}>
                    <FlatList
                        data={todos}
                        //renderItem={({item}) => <ListItem word={item} />}
                        
                    />
                </View>
            </View>
            <View style={styles.input}>
                <TextInput
                    style={styles.textCtn}
                    placeholder="Enter a Task"
                    value={inp_text}
                    onChangeText={setText} 
                />
                <TouchableOpacity style={styles.btn} onPress={sendText}>
                    <AntDesign name="plus" size={20} color="gray" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "gainsboro",
        paddingTop: 80,
        paddingHorizontal: 30,
        flex: 1,
        
    },
    topCnt: {
        flex: 1
    },

    taskHeader: {
        fontWeight: "bold",
        fontSize: 22,
        alignSelf: "flex-start"
    },
    input: {
        position: "absolute",
        bottom: 60,
        width: "94%",
        display: "flex",
        flexDirection: "row",
        height: 40,
        alignSelf: "center"
    },
    textCtn: {
        flex: 6,
        borderRadius: 100,
        textAlign: "center",
        fontWeight: "600",
        fontSize: 16,
        backgroundColor: "white"
        
    },
    btn: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 50,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    fltList: {
        backgroundColor: "green",
        flex: 1,
        marginTop: 30
    }
})

export default Task;