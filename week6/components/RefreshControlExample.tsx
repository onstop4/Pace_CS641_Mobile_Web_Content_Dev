import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, Pressable, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const RefreshControlExample = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const image = { uri: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nachusa_Grasslands_Spring_2016.jpg" };

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                    <Text>Pull down to see RefreshControl indicator</Text>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    textView: {
        backgroundColor: '#fff'
    }
});

export default RefreshControlExample;
