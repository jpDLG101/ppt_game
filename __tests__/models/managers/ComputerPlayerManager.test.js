import ComputerPlayerManager from '../../../models/managers/ComputerPlayerManager';

describe('ComputerPlayerManager', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('elige ROCK cuando Math.random devuelve el valor más bajo', () => {
    // GIVEN
    jest.spyOn(Math, 'random').mockReturnValue(0);
    const manager = ComputerPlayerManager();

    // WHEN
    const move = manager.chooseMove();

    // THEN
    expect(move.value).toBe('ROCK');
  });
  test('elige PAPER cuando Math.random devuelve un valor intermedio', () => {
    // GIVEN
    jest.spyOn(Math, 'random').mockReturnValue(0.4);
    const manager = ComputerPlayerManager();

    // WHEN
    const move = manager.chooseMove();

    // THEN
    expect(move.value).toBe('PAPER');
  });
  test('elige SCISSORS cuando Math.random devuelve el valor más alto', () => {
    // GIVEN
    jest.spyOn(Math, 'random').mockReturnValue(0.9);
    const manager = ComputerPlayerManager();

    // WHEN
    const move = manager.chooseMove();

    // THEN
    expect(move.value).toBe('SCISSORS');
  });
});
