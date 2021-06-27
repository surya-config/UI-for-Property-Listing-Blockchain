import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import MainFlow from './MainFlow';
import LottieView from 'lottie-react-native';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Setting a timer', 'Unhandled promise rejection']);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <LottieView
          source={require('./assets/5717-decentralized.json')}
          autoPlay
          loop
        />
      </View>
    );
  }

  return <MainFlow />;
}

export default App;
