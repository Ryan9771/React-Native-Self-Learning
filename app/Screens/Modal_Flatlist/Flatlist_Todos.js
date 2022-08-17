import React, { useState } from 'react';
import { Text, 
    View, 
    StyleSheet, 
    FlatList, 
    TextInput, 
    Button, 
    TouchableOpacity} from 'react-native';

import Todo_Input from './Todos';

    
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

    const [todos, setTodos] = useState([]);

    function addTodo(inp_text) {
        setTodos([...todos, inp_text]);
    }

    function deleteItem(label) {
        setTodos(todos.filter((item) => item !== label));
    }

    return (
        <View style={styles.container}>
            <View style={styles.topCnt}>
                <Todo_Input todoHandler={addTodo}/>
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
        flex: 4
    }, 
    container: {
        flex: 3,
        backgroundColor: "antiquewhite",
        paddingTop: 70,
        padding: 20
    },
    item: {
        paddingVertical: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    topCnt: {
        flex: 1, 
        paddingLeft: 5,
        justifyContent: "center"
    },
    
})

export default MyList;