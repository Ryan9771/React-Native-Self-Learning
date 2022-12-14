import React, { useState } from 'react';
import { Text, 
    View, 
    StyleSheet, 
    FlatList, 
    TextInput, 
    Button, 
    TouchableOpacity} from 'react-native';

import Todo_Input from './InputScreen';

    
// The item to render: A button for each item so can delete with long press 
function ViewItem(props) {
    return (
        <TouchableOpacity
            onLongPress={props.onDelete.bind(this, props.label)}
        >
            <Text style={styles.item}>{props.label}</Text>
        </TouchableOpacity>
    );

}

const MyList = () => {

    const [todos, setTodos] = useState([]); // Todos list
    const [modal_visible, setModalVisible] = useState(false);

    function setModalTrue() {
        setModalVisible(true);
    }

    function setModalFalse() {
        setModalVisible(false);
    }

    function addTodo(inp_text) {
        setTodos([...todos, inp_text]);
    }

    function deleteItem(label) {
        setTodos(todos.filter((item) => item !== label));
    }

    return (
        <View style={styles.container}>
            <View style={styles.topCnt}>
                <Button 
                    style={styles.btn}
                    title="Add new Item"
                    color="#5e0acc"
                    onPress={setModalTrue}
                />
                <Todo_Input 
                    modalVisible={modal_visible} 
                    todoHandler={addTodo}
                    setHidden={setModalFalse}
                />
            </View>
            <View style={styles.btmCnt}>
                <FlatList
                    data={todos}
                    renderItem={({item}) => <ViewItem label={item} onDelete={deleteItem}/>}
                />
            </View>
        </View>
            
    );
}

const styles = StyleSheet.create({
    btmCnt: {
        flex: 4,
        alignItems: "center"
    }, 
    container: {
        flex: 1,
        backgroundColor: "antiquewhite",
        paddingTop: 70,
        padding: 20
    },
    item: {
        paddingVertical: 10,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center"
    },
    topCnt: {
        flex: 1, 
        paddingLeft: 5,
        marginTop: 40
    },
    
})

export default MyList;