import * as React from 'react';
import { View, Text } from 'react-native';
import SignpostList from '../components/SignpostList'

const SignpostScreen = props => {
  return (
    <SignpostList navigation = {props.navigation}/>
  );
}
export default SignpostScreen
