import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

import Login from './Login';
import Main from './Main';

import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Login />
        <Main user={{name: 'James'}} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create();

export default App;
