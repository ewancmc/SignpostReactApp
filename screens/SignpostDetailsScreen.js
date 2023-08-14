import React from 'react';
import { Text, View } from 'react-native';

const SignpostDetailsScreen = ({route, navigation}) => {
    const {item} = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is SignpostDetails and id is {item.id}</Text>
        </View>
    );
}

export default SignpostDetailsScreen;