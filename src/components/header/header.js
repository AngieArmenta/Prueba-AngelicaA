import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text>DEMO Streaming</Text>
            <Text>Log In</Text>
            <View style={styles.containerOptions}>
                <Button 
                    title="Start your free trial"
                    color="#841584" 
                    style={styles.button} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 55,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    containerOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        borderRadius: 20,
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        backgroundColor: '#FF6347', 
        color: '#fff', 
        fontWeight: 'bold'
    }
});