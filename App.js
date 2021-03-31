import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { fetchUsersPage } from "./services/users";
import { basic } from "./theme";

export default function App () {
  return (
    <View style={basic.container}>
      <StatusBar style="auto"/>

      <Text style={basic.h1}>
        Ready for a quick challenge?
      </Text>
      <Text style={basic.paragraph}>
        Use services/fetchUsersPage for fetching the details of our users and their payment tables.
      </Text>
      <Text style={basic.paragraph}>
        Display those pieces of information in a table.
      </Text>

      <Users/>
    </View>
  );
}

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const usersList = await fetchUsersPage();
      const data = await usersList.json();

      setData([data.Users[0]]);
    }

    fetchData();
  }, []);
  return data.map(user => <Text style={basic.debug}>{user.email}</Text>);
};
