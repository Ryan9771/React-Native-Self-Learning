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

    const [inp_text, setText] = useState(""); // The input text from TextInput
    const [todos, setTodos] = useState([]); // The list of todos
    const [num_todos, setNumTodos] = useState(0); // Keeps track of the id for tasks
    const [rerender, setRerender] = useState(false); // State for re-rendering
    
    // Adds input text to 'todos' if not blank, and supplies a unique id
    function sendText() {
        if (inp_text.trim()) {
            setTodos([...todos, {id: num_todos, title: inp_text}]);
            setNumTodos(num_todos + 1);
            
        }
        setText("");
    }

    // Modifies the todo
    function modifyTask(id, newTask) {
        const newTodos = todos.map((item) => {
            if (item.id == id) {
                item.title = newTask; 
                return item;
            }
            return item;
        })
        setTodos(newTodos);
    }

    // Flips the state of the rerender variable for the flatlist to re-render
    function toggleRender() {
        setRerender(!rerender);
    }

    // Deletes a task from 'todo' with the given id number
    function deleteTask(id_num) {
        setTodos(todos.filter(({id}) => id !== id_num));
    }
    
    return (
        <View style={styles.screen}>
            <View style={styles.topCnt}>
                <Text style={styles.taskHeader}>Today's Tasks</Text>
                <View style={styles.fltList}>
                    <FlatList
                        data={todos}
                        renderItem={({item}) => 
                            <ListItem 
                                id={item.id} 
                                task={item.title} 
                                changeTask={modifyTask}
                                render={toggleRender}
                                deleteHandler={deleteTask}
                            />
                        }
                        keyExtractor={(item) => item.id}
                        extraData={rerender}
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
        backgroundColor: "oldlace",
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
        backgroundColor: "white",
        shadowColor: "gray",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        paddingHorizontal: 8
        
    },
    btn: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 50,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "gray",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1
    },
    fltList: {
        width: '100%',
        height: '78%',
        marginTop: 30
    }
})

export default Task;