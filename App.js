import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import RPSScreen from './screens/RPSScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Piedra, Papel o Tijeras
        </Text>
        <RPSScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    textAlign: 'center',
    paddingVertical: 20,
    backgroundColor: '#4a148c',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  },
});