import React from 'react';
import { SafeAreaView } from 'react-native';
import PasswordGenerator from './src/components/PasswordGenerator';

const App = () => {
  return (
    <SafeAreaView>
      <PasswordGenerator />
    </SafeAreaView>
  );
};

export default App;