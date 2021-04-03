import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Text, View } from 'react-native';
import { basic } from '../theme';

export const Sort = ({ setOrder, order }) => {
  return (
    <View>
      <Text>Order users by</Text>
      <Picker selectedValue={order} style={basic.input} onValueChange={(itemValue) => setOrder(itemValue)}>
        <Picker.Item label='None' value='' />
        <Picker.Item label='Username' value='username' />
        <Picker.Item label='Email' value='email' />
        <Picker.Item label='Default payment method' value='paymentMethod' />
      </Picker>
    </View>
  );
};
