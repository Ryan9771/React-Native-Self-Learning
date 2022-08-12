import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';


const App = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.red}></Text>
            <Text style={styles.blue}></Text>
            <Text style={styles.green}></Text>
            <Text style={styles.orange}></Text>
            <Text style={styles.purple}></Text>
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        //alignItems: "center"
        alignContent: "center"
        
    },
    red: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    blue: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
    green: {
        width: 100,
        height: 100,
        backgroundColor: 'green'
    },
    orange: {
        width: 100,
        height: 100,
        backgroundColor: 'orange'
    },
    purple: {
        width: 100,
        height: 100,
        backgroundColor: 'purple'
    }
})

export default App;