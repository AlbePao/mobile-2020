import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Paginator } from '../components/Paginator';
import { Search } from '../components/Search';
import { Sort } from '../components/Sort';
import { Users } from '../components/Users';
import { fetchUsers } from '../services/users';
import { basic } from '../theme';

export const Home = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('');
  const [page, setPage] = useState(1);

  const usersData = fetchUsers(page);

  const navigateToUserDetail = (user) => {
    navigation.navigate('UserDetail', { user });
  };

  return (
    <View>
      <StatusBar style='auto' />
      <View style={basic.flexRow}>
        <Search setSearch={setSearch} />
        <Sort setOrder={setOrder} order={order} />
      </View>
      <Users usersData={usersData} search={search} order={order} navigate={navigateToUserDetail} />
      <Paginator setPage={setPage} currentPage={page} />
    </View>
  );
};
