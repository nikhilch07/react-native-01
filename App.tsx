import React from 'react';
import { SafeAreaView, useColorScheme, FlatList } from 'react-native';
import FlatCards from './src/components/FlatCards';
import ElevatedCards from './src/components/ElevatedCards';
import FancyCards from './src/components/FancyCards';

const App = () => {
  return (
    <SafeAreaView> 
      <FlatList
        data={[{ key: 'FlatCards' }, { key: 'ElevatedCards' }, { key: 'FancyCards' }]}
        renderItem={({ item }) => {
          console.log('ITEM', item);
          if (item.key === 'FlatCards') {
            return <FlatCards />;
          } else if (item.key === 'ElevatedCards') {
            return <ElevatedCards />;
          } 
          else if (item.key === 'FancyCards') {
            return <FancyCards />;
          }
          return null;
        }}
        keyExtractor={(item) => item.key}
      />    
     </SafeAreaView>
  );
};

export default App;