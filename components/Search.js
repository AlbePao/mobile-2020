import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { basic } from '../theme';

export const Search = ({ setSearch }) => {
  return (
    <View style={basic.flexStart}>
      <Text>Search by email</Text>
      <TextInput style={basic.input} onChangeText={setSearch} />
    </View>
  );
};
