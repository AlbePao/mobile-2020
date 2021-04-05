import React from 'react';
import { Text, View } from 'react-native';
import { basic } from '../theme';

export const UserDetail = ({ route }) => {
  const {
    params: { user },
  } = route;

  const signupDate = new Date(user.signup_date).toLocaleString();

  const renderPaymentMethod = (paymentMethod) => (
    <View key={paymentMethod.id} style={basic.userDetail}>
      <Text>
        <strong>Name</strong> {paymentMethod.name} {paymentMethod.default && <Text>(Default)</Text>}
      </Text>
      <Text>
        <strong>Type</strong> {paymentMethod.type}
      </Text>
      <Text>
        <strong>Ending with</strong> {paymentMethod.ending_with}
      </Text>
      <Text>
        <strong>Currency</strong> {paymentMethod.currency}
      </Text>
    </View>
  );

  return (
    <View>
      <Text style={basic.h1}>User Detail</Text>
      <View style={basic.userDetail}>
        <Text>
          <strong>Name</strong> {user.name}
        </Text>
        <Text>
          <strong>Surname</strong> {user.surname}
        </Text>
        <Text>
          <strong>Username</strong> {user.username}
        </Text>
        <Text>
          <strong>Signup date</strong> {signupDate}
        </Text>
      </View>
      <Text style={basic.h1}>Payment methods</Text>
      {user.PaymentMethods.map((paymentMethod) => renderPaymentMethod(paymentMethod))}
    </View>
  );
};
