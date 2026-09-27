import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import useRockPaperScissors from '../hooks/useRockPaperScissors';

const MOVE_ICONS = {
  ROCK: 'hand-rock',
  PAPER: 'hand-paper',
  SCISSORS: 'hand-scissors',
};

const MOVE_LABELS = {
  ROCK: 'Piedra',
  PAPER: 'Papel',
  SCISSORS: 'Tijeras',
};

const RPSScreen = () => {
  const { computerMove, winner, score, play } = useRockPaperScissors();

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
      <Button
        id="rockButton"
        testID="rockButton"
        mode="contained"
        buttonColor="#ffffff"
        onPress={() => play('ROCK')}
        style={styles.moveCard}
        contentStyle={styles.moveCardContent}
        labelStyle={styles.moveCardLabel}
      >
        <FontAwesome5 name={MOVE_ICONS.ROCK} size={32} color="#4a148c" />
      </Button>
      <Button
        id="paperButton"
        testID="paperButton"
        mode="contained"
        buttonColor="#ffffff"
        onPress={() => play('PAPER')}
        style={styles.moveCard}
        contentStyle={styles.moveCardContent}
        labelStyle={styles.moveCardLabel}
      >
        <FontAwesome5 name={MOVE_ICONS.PAPER} size={32} color="#4a148c" />
      </Button>
      <Button
        id="scissorsButton"
        testID="scissorsButton"
        mode="contained"
        buttonColor="#ffffff"
        onPress={() => play('SCISSORS')}
        style={styles.moveCard}
        contentStyle={styles.moveCardContent}
        labelStyle={styles.moveCardLabel}
      >
        <FontAwesome5 name={MOVE_ICONS.SCISSORS} size={32} color="#4a148c" />
      </Button>
      </View>
      <Text style={styles.vsText}>VS</Text>
      <View style={styles.computerCard}>
        <FontAwesome5
          testID="computerMoveIcon"
          accessibilityLabel={`Jugada de la computadora: ${computerMove ? MOVE_LABELS[computerMove.value] : 'sin jugar'}`}
          name={computerMove ? MOVE_ICONS[computerMove.value] : 'question-circle'}
          size={64}
          color="#bd2525"
        />
      </View>

      <View style={styles.scoreRow}>
        <View style={styles.scoreColumn}>
          <Text style={styles.scoreLabel}>Jugador</Text>
          <Text testID="playerScore" style={styles.scoreValue}>{score.playerWins}</Text>
        </View>
        <View style={styles.scoreDivider} />
        <View style={styles.scoreColumn}>
          <Text style={styles.scoreLabel}>Computadora</Text>
          <Text testID="computerScore" style={styles.scoreValue}>{score.computerWins}</Text>
        </View>
      </View>
      <Text testID="tiesText" style={styles.tiesText}>Empates: {score.ties}</Text>

      {winner && (
        <View style={styles.resultPill}>
          <Text testID="resultText" style={styles.resultText}>
            {winner === 'PLAYER' && '¡Ganaste!'}
            {winner === 'COMPUTER' && 'Ganó la compu'}
            {winner === 'TIE' && 'Empate'}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3eefb',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  moveCard: {
  flex: 1,
  marginHorizontal: 6,
  borderRadius: 10,
  },
  moveCardContent: {
    paddingVertical: 20,
    justifyContent: 'center',
  },
  moveCardLabel: {
    lineHeight: 44,
    margin: 0,
  },
  vsText: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 16,
    fontWeight: '700',
    color: '#4a148c',
  },
  computerCard: {
    alignSelf: 'center',
    width: 140,
    paddingVertical: 24,
    marginTop: 8,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  scoreColumn: {
    flex: 1,
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 14,
    color: '#4b5d78',
  },
  scoreValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#4a148c',
  },
  scoreDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#c9bce0',
  },
  tiesText: {
    textAlign: 'center',
    color: '#4b5d78',
    marginBottom: 12,
  },
  resultPill: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 999,
    backgroundColor: '#e0d6f0',
  },
  resultText: {
    color: '#4a148c',
    fontWeight: '600',
  },
});

export default RPSScreen;
