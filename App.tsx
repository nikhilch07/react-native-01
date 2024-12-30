import React from 'react';
import { SafeAreaView, useColorScheme, FlatList } from 'react-native';
import FlatCards from './src/components/FlatCards';
import ElevatedCards from './src/components/ElevatedCards';
import FancyCards from './src/components/FancyCards';

const App = () => {
  console.log('DARK MODE: ', useColorScheme());
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView> 
      {/* <ScrollView> */}
      <FlatList
        data={[{ key: 'FlatCards' }, { key: 'ElevatedCards' }, { key: 'FancyCards' }]}
        renderItem={({ item }) => {
          console.log('ITEM', item);
          if (item.key === 'FlatCards') {
            return <FlatCards />;
          } else if (item.key === 'ElevatedCards') {
            return <ElevatedCards />;
          } else if (item.key === 'FancyCards') {
            return <FancyCards />;
          }
          return null;
        }}
        keyExtractor={(item) => item.key}
      />
    
      {/* </ScrollView> */}
     </SafeAreaView>
  );
};

export default App;