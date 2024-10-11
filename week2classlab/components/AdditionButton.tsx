import React, { useState } from "react";
import { View, Text, Button } from 'react-native';

export default function AdditionButton({ buttonText = '', amount = 1 }) {
    const [current, setCurrent] = useState(0);

    return (
        <View>
            <Text>Current : {current}</Text>
            <Button title={buttonText} onPress={() => { setCurrent(current + amount) }}></Button>
        </View>
    )
}