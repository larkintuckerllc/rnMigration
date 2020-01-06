/**
 * Application entry component
 * @module src/components/App
 */
/* eslint-disable no-console */
import React, { FC, useEffect } from 'react';
import { Text, View } from 'react-native';
import { initialize } from '../util/global';

const App: FC = () => {
  useEffect(() => {
    const execute = async (): Promise<void> => {
      try {
        await initialize();
      } catch (err) {
        console.log(err);
      }
    };
    execute();
  });
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

/* Application entry component */
export default App;
