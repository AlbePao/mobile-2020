import React from 'react';
import { Button, Text } from 'react-native';

export const Users = (props) => {
  const {
    search,
    order,
    navigate,
    usersData: { isLoading, error, users },
  } = props;

  const displayedUsers = users
    .filter((user) => user.email.includes(search))
    .sort((a, b) => {
      if (order === 'username') {
        return a.username > b.username ? 1 : -1;
      } else if (order === 'email') {
        return a.email > b.email ? 1 : -1;
      } else if (order === 'paymentMethod') {
        const aDefaultPaymentName = a.PaymentMethods.find((paymentMethod) => paymentMethod.default).name;
        const bDefaultPaymentName = b.PaymentMethods.find((paymentMethod) => paymentMethod.default).name;

        return aDefaultPaymentName > bDefaultPaymentName ? 1 : -1;
      }
    });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>There was an error fetching users list</Text>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            <Text>Username</Text>
          </th>
          <th>
            <Text>Default payment method</Text>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {displayedUsers.map((user) => (
          <tr key={user.id}>
            <td>
              <Text>{user.username}</Text>
            </td>
            <td>
              <Text>{user.PaymentMethods.find((paymentMethod) => paymentMethod.default).name}</Text>
            </td>
            <td>
              <Button title='Details' onPress={() => navigate(user)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
