import React from 'react';
import { Button, View } from 'react-native';
import { basic } from '../theme';

export const Paginator = ({ setPage, currentPage }) => {
  return (
    <View style={basic.flexRow}>
      <View style={basic.flexStart}>
        {currentPage > 1 && <Button title='Previous' onPress={() => setPage(currentPage - 1)} />}
      </View>
      <View style={basic.flexEnd}>
        <Button title='Next' onPress={() => setPage(currentPage + 1)} />
      </View>
    </View>
  );
};
