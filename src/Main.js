import React from 'react';
import {View, TextInput, Text} from 'react-native';

export default ({user}) => {
  return (
    <View>
      <Text>Welcome {user.name}</Text>
    </View>
  );
};
