import React from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

export default () => {
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const user = auth().currentUser;

  console.log(user);
  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};
