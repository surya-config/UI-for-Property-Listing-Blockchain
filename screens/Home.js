import React from 'react';
import {View, Text} from 'react-native';

function Home() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001117',
      }}>
      <Text style={{color: 'white'}}>Home</Text>
    </View>
  );
}

export default Home;
