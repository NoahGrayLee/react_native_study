import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class GuidePlan extends Component {
    static navigationOptions = {
        title: 'GuidePlan',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Text>GuidePlan</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default GuidePlan;