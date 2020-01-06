/**
 * Application entry component
 * @module src/components/App
 */
/* eslint-disable no-console */
import React, { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { initialize } from '../../util/global';
import { DowngradeError } from '../../util/SQLiteClient';
import styles from './styles';

const App: FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    const execute = async (): Promise<void> => {
      try {
        await initialize();
      } catch (err) {
        if (err instanceof DowngradeError) {
          setErrorMessage('Downgrade error');
        } else {
          setErrorMessage('Unexpected error');
        }
        setError(true);
      }
      setLoading(false);
    };
    execute();
  });

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Initializing application...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.container}>
        <Text>{`Error: ${errorMessage}`}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};

/* Application entry component */
export default App;
