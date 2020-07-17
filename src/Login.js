import React, {useState} from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '511117585585-2pg11pogeflefoogh0o8nu4mru3kfris.apps.googleusercontent.com',
});

export default () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    auth()
      .createUserWithEmailAndPassword(user, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    console.log('In');
    const idToken = await GoogleSignin.signIn();
    console.log(idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(
      idToken.idToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <View style={styles.credentialBox}>
      <Text>Email</Text>
      <TextInput
        placeholder={'Email'}
        keyboardType={'email-address'}
        onChangeText={text => setUser(text)}
      />
      <Text>Password</Text>
      <TextInput
        placeholder={'Password'}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <Button title={'Loggin'} onPress={login} />
      <Button title={'Singin'} onPress={logout} />
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  credentialBox: {
    alignItems: 'center',
  },
});
