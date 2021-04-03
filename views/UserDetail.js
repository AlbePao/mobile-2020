import React from 'react';
import { Text, View } from 'react-native';
import { basic } from '../theme';

export const UserDetail = ({ route }) => {
  const {
    params: { user },
  } = route;
  console.log(route);

  const signupDate = new Date(user.signup_date).toLocaleString();

  const renderPaymentMethod = (paymentMethod) => (
    <View key={paymentMethod.id}>
      <Text>
        Name: {paymentMethod.name} {paymentMethod.default && <Text>(Default)</Text>}
      </Text>
      <Text>Type: {paymentMethod.type}</Text>
      <Text>Ending with: {paymentMethod.ending_with}</Text>
      <Text>Currency: {paymentMethod.currency}</Text>
    </View>
  );

  return (
    <View style={basic.container}>
      <Text>Name {user.name}</Text>
      <Text>Surname {user.surname}</Text>
      <Text>Username {user.username}</Text>
      <Text>Signup date {signupDate}</Text>
      <Text>Payment methods</Text>
      {user.PaymentMethods.map((paymentMethod) => renderPaymentMethod(paymentMethod))}
    </View>
  );
};
