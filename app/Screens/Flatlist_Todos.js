import React, { useState } from 'react';
import { Text, 
    View, 
    StyleSheet, 
    FlatList, 
    TextInput, 
    Button, 
    TouchableOpacity} from 'react-native';

    
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

    const [inp_text, setInpText] = useState('');
    const [todos, setTodos] = useState([]);

    function addTodo() {
        if (inp_text.trim()) {
            setTodos([...todos, inp_text]);
        }
        setInpText('');
    }

    function deleteItem(label) {
        setTodos(todos.filter((item) => item !== label));
    }

    return (
        <View style={styles.container}>
            <View style={styles.topCnt}>
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
                        onPress={addTodo}
                    />
                </View>
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
        flex: 2
    }, 
    btn: {
        flex: 1
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
    input: {
        flex: 2,
        fontWeight: '600',
        fontSize: 16
    },
    topCnt: {
        flex: 1, 
        paddingLeft: 5,
        justifyContent: "center"
    },
    topWrapper: {
        flexDirection: "row",
    },
    
})

export default MyList;