import MoveVO from '../../../models/valueobjects/MoveVO';
import GameManager from '../../../models/managers/GameManager';

describe('GameManager', () => {
  test('empata cuando ambos jugadores eligen la misma jugada', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('ROCK');
    const computerMove = new MoveVO('ROCK');

    // WHEN
    const result = manager.play(playerMove, computerMove);

    // THEN
    expect(result.winner).toBe('TIE');
  });
    test('el jugador gana cuando elige piedra y la compu elige tijeras', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('ROCK');
    const computerMove = new MoveVO('SCISSORS');

    // WHEN
    const result = manager.play(playerMove, computerMove);

    // THEN
    expect(result.winner).toBe('PLAYER');
  });
    test('el jugador gana cuando elige tijeras y la compu elige papel', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('SCISSORS');
    const computerMove = new MoveVO('PAPER');

    // WHEN
    const result = manager.play(playerMove, computerMove);

    // THEN
    expect(result.winner).toBe('PLAYER');
  });
  test('el jugador gana cuando elige papel y la compu elige piedra', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('PAPER');
    const computerMove = new MoveVO('ROCK');

    // WHEN
    const result = manager.play(playerMove, computerMove);

    // THEN
    expect(result.winner).toBe('PLAYER');
  });
  test('la computadora gana cuando elige piedra y el jugador elige tijeras', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('SCISSORS');
    const computerMove = new MoveVO('ROCK');

    // WHEN
    const result = manager.play(playerMove, computerMove);

    // THEN
    expect(result.winner).toBe('COMPUTER');
  });
  test('la computadora gana cuando elige tijeras y el jugador elige papel', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('PAPER');
    const computerMove = new MoveVO('SCISSORS');

    // WHEN
    const result = manager.play(playerMove, computerMove);

    // THEN
    expect(result.winner).toBe('COMPUTER');
  });
  test('la computadora gana cuando elige papel y el jugador elige piedra', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('ROCK');
    const computerMove = new MoveVO('PAPER');

    // WHEN
    const result = manager.play(playerMove, computerMove);

    // THEN
    expect(result.winner).toBe('COMPUTER');
  });
});