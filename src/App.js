import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

import Login from './Login';
import Main from './Main';

import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState(null);

  // Handle user state changes
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>{user ? <Main user={user} /> : <Login />}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create();

export default App;
