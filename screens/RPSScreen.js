import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import useRockPaperScissors from '../hooks/useRockPaperScissors';

const RPSScreen = () => {
  const { computerMove, winner, score, play } = useRockPaperScissors();

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button id="rockButton" mode="contained" onPress={() => play('ROCK')}>
          Piedra
        </Button>
        <Button id='paperButton' mode='contained' onPress={() => play('PAPER')}>
          Papel
        </Button>
        <Button id='scissorsButton' mode='contained' onPress={() => play('SCISSORS')}>
          Tijera
        </Button>
      </View>
      <Text>Movimiento de la computadora: {computerMove?.value}</Text>
      <Text>
        {winner === 'PLAYER' && '¡Ganaste!'}
        {winner === 'COMPUTER' && 'Ganó la compu'}
        {winner === 'TIE' && 'Empate'}
      </Text>
      <Text>Victorias del jugador: {score.playerWins}</Text>
      <Text>Victorias de la computadora: {score.computerWins}</Text>
      <Text>Empates: {score.ties}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default RPSScreen;
