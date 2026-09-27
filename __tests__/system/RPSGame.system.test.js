import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import RPSScreen from '../../screens/RPSScreen';

// Unico mock: Math.random, para forzar la jugada de la computadora.
// ComputerPlayerManager usa Math.floor(random * 3): 0 = ROCK, 0.4 = PAPER, 0.8 = SCISSORS.
const RANDOM_FOR = { ROCK: 0, PAPER: 0.4, SCISSORS: 0.8 };
const BUTTON_FOR = {
  ROCK: 'rockButton',
  PAPER: 'paperButton',
  SCISSORS: 'scissorsButton',
};
// Etiqueta accesible del icono de la computadora (lo que anuncia un lector de pantalla).
const ICON_FOR = {
  ROCK: 'Jugada de la computadora: Piedra',
  PAPER: 'Jugada de la computadora: Papel',
  SCISSORS: 'Jugada de la computadora: Tijeras',
};
const ICON_INITIAL = 'Jugada de la computadora: sin jugar';
const TEXT_FOR = {
  PLAYER: '¡Ganaste!',
  COMPUTER: 'Ganó la compu',
  TIE: 'Empate',
};

const setComputerMove = (move) => {
  Math.random.mockReturnValueOnce(RANDOM_FOR[move]);
};

const playRound = async (playerMove, computerMove) => {
  setComputerMove(computerMove);
  await fireEvent.press(screen.getByTestId(BUTTON_FOR[playerMove]));
};

const expectScore = (player, computer, ties) => {
  expect(screen.getByTestId('playerScore')).toHaveTextContent(String(player));
  expect(screen.getByTestId('computerScore')).toHaveTextContent(String(computer));
  expect(screen.getByTestId('tiesText')).toHaveTextContent(`Empates: ${ties}`);
};

const expectRound = (computerMove, winner) => {
  expect(screen.getByTestId('computerMoveIcon').props.accessibilityLabel).toBe(ICON_FOR[computerMove]);
  expect(screen.getByTestId('resultText')).toHaveTextContent(TEXT_FOR[winner]);
};

describe('Pruebas de sistema - Piedra, Papel o Tijeras', () => {
  beforeEach(async () => {
    jest.spyOn(Math, 'random');
    await render(<RPSScreen />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('STC-001 estado inicial de la app', () => {
    expect(screen.getByTestId('computerMoveIcon').props.accessibilityLabel).toBe(ICON_INITIAL);
    expect(screen.queryByTestId('resultText')).toBeNull();
    expectScore(0, 0, 0);
    expect(screen.getByTestId('rockButton')).toBeTruthy();
    expect(screen.getByTestId('paperButton')).toBeTruthy();
    expect(screen.getByTestId('scissorsButton')).toBeTruthy();
  });

  // [id, jugador, computadora, ganador, marcador esperado (jugador, compu, empates)]
  const combos = [
    ['STC-002', 'ROCK', 'ROCK', 'TIE', [0, 0, 1]],
    ['STC-003', 'ROCK', 'PAPER', 'COMPUTER', [0, 1, 0]],
    ['STC-004', 'ROCK', 'SCISSORS', 'PLAYER', [1, 0, 0]],
    ['STC-005', 'PAPER', 'ROCK', 'PLAYER', [1, 0, 0]],
    ['STC-006', 'PAPER', 'PAPER', 'TIE', [0, 0, 1]],
    ['STC-007', 'PAPER', 'SCISSORS', 'COMPUTER', [0, 1, 0]],
    ['STC-008', 'SCISSORS', 'ROCK', 'COMPUTER', [0, 1, 0]],
    ['STC-009', 'SCISSORS', 'PAPER', 'PLAYER', [1, 0, 0]],
    ['STC-010', 'SCISSORS', 'SCISSORS', 'TIE', [0, 0, 1]],
  ];

  test.each(combos)(
    '%s jugador %s vs computadora %s da %s',
    async (_id, player, computer, winner, score) => {
      await playRound(player, computer);
      expectRound(computer, winner);
      expectScore(...score);
    },
  );

  test('STC-011 acumulacion mixta en varias rondas', async () => {
    await playRound('ROCK', 'SCISSORS'); // gana jugador
    expectScore(1, 0, 0);
    await playRound('ROCK', 'PAPER'); // gana compu
    expectScore(1, 1, 0);
    await playRound('PAPER', 'PAPER'); // empate
    expectScore(1, 1, 1);
    await playRound('SCISSORS', 'PAPER'); // gana jugador
    expectScore(2, 1, 1);
    expectRound('PAPER', 'PLAYER');
  });

  test('STC-012 racha del mismo resultado', async () => {
    await playRound('PAPER', 'ROCK');
    await playRound('PAPER', 'ROCK');
    await playRound('PAPER', 'ROCK');
    expectScore(3, 0, 0);
    expectRound('ROCK', 'PLAYER');
  });

  test('STC-013 el icono y el texto se reemplazan en cada ronda', async () => {
    await playRound('ROCK', 'SCISSORS');
    expectRound('SCISSORS', 'PLAYER');
    await playRound('ROCK', 'PAPER');
    expectRound('PAPER', 'COMPUTER');
    expect(screen.getAllByTestId('resultText')).toHaveLength(1);
    await playRound('PAPER', 'PAPER');
    expectRound('PAPER', 'TIE');
    expect(screen.getAllByTestId('resultText')).toHaveLength(1);
    await playRound('SCISSORS', 'ROCK');
    expectRound('ROCK', 'COMPUTER');
  });
});
