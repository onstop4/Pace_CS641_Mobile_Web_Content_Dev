import React, { useState } from "react";
import { View, Text, Button } from 'react-native';

export default function SimpleCounter({ secondsBeforeIncrement = 1 }) {
    const [count, setCount] = useState(0);
    const [intervalID, setIntervalID] = useState(0);

    const startCounter = () => {
        setIntervalID(window.setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, secondsBeforeIncrement * 1000));
    };

    const stopCounter = () => {
        if (intervalID) {
            clearInterval(intervalID);
            setIntervalID(0);
        }
    };

    return (
        <View>
            <Text>Count : {count}</Text>
            <Text>Will increment every {secondsBeforeIncrement} seconds</Text>
            {intervalID == 0 ?
                <Button title="Start" onPress={startCounter}></Button>
                : <Button title="Stop" onPress={stopCounter}></Button>}
        </View>
    )
}