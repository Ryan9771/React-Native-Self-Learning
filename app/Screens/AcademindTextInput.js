import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Text } from 'react-native';

const Goals = () => {

    const [enteredText, setEnteredText] = useState('')
    const [goalItems, setGoalItems] = useState([])

    function headerText() {
        if (goalItems.length === 0) {
            return <Text style={styles.goalHeader}>Add a goal!</Text>
        }
    }

    function inputHandler(text) {
        setEnteredText(text);
    }

    function btnHandler() {
        setGoalItems((goals) => [...goalItems, enteredText]);
    }

    return (
        <View>
            <View style={styles.topCnt}>
                <TextInput
                    style={styles.textInpt}
                    placeholder="Your course goal!"
                    onChangeText={inputHandler}
                />
                <Button 
                style={styles.btn} 
                title="Add Goal"
                onPress={btnHandler}
                />
            </View>
            <View style={styles.btmCnt}>
                <Text style={styles.goalHeader}>{goalItems.length === 0 ? "Add a goal!" : "Your Goals:"}</Text>
                {goalItems.map((goal) => <Text style={styles.goals} key={goal}>{goal}</Text>)}
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    topCnt: {
        flexDirection: "row", 
        marginTop: 70,
        paddingHorizontal: 20
    },
    textInpt: {
        flex: 2,
        height: 40,
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'gainsboro', 
        padding: 10
    },
    btn: {
        flex: 1,
    }, 
    btmCnt: {
        marginTop: 30,
        borderTopColor: "gainsboro",
        borderTopWidth: 2, 
        marginHorizontal: 10,
        padding: 20
    }, 
    goalHeader: {
        color: "green",
        fontSize: 25, 
        marginBottom: 15
    }, 
    goals: {
        marginVertical: 7, 
        fontSize: 17
    }
})

export default Goals;