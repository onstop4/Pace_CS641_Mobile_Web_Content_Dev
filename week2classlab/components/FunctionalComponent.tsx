import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import customStyle from "../styles/custom";

interface FunctionalComponentProps {
    buttonTitle: string
    showButton: boolean
}

const users = [
    { firstName: 'A', lastName: 'B' },
    { firstName: 'C', lastName: 'D' },
    { firstName: 'E', lastName: 'F' },
]

const FunctionalComponent = (props: FunctionalComponentProps) => {
    const [count, setCount] = useState(100);
    const [onScreenTimer, setOnScreenTimer] = useState(100);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    useEffect(() => {
        const value = setInterval(() => setOnScreenTimer((onScreenTimer)))
    });

    return (
        <View style={customStyle.container}>
            <Text>Count : {count}</Text>
            <Text>Time on screen : {onScreenTimer}</Text>
            {users.map((user) => <Text>{user.lastName}, {user.firstName}</Text>)}
            <Button title={props.buttonTitle} onPress={increase}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 500,
        height: 500,
    }
});


export default FunctionalComponent;