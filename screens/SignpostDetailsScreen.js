import React from 'react';
import { Text, View } from 'react-native';

const SignpostDetailsScreen = props => {
    const id = props.navigation.getParam('id');
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is SignpostDetails and id is {id}</Text>
        </View>
    );
}

export default SignpostDetailsScreen;