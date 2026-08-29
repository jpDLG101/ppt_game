import ScoreVO from '../../../models/valueobjects/ScoreVO';
import ScoreManager from '../../../models/managers/ScoreManager';

describe('ScoreManager', () => {
  test('suma un punto al player cuando gana la ronda', () => {
    // GIVEN
    const manager = ScoreManager();
    const currentScore = new ScoreVO(0, 0, 0);

    // WHEN
    const updatedScore = manager.update(currentScore, 'PLAYER');

    // THEN
    expect(updatedScore.playerWins).toBe(1);
    expect(updatedScore.computerWins).toBe(0);
    expect(updatedScore.ties).toBe(0);
  });
  test("suma un punto a la computer cuando gana la ronda", () => {
    // GIVEN
    const manager = ScoreManager();
    const currentScore = new ScoreVO(0, 0, 0);

    // WHEN
    const updatedScore = manager.update(currentScore, 'COMPUTER');

    // THEN
    expect(updatedScore.playerWins).toBe(0);
    expect(updatedScore.computerWins).toBe(1);
    expect(updatedScore.ties).toBe(0);
  });
  test('suma un punto a tie cuando hay empate', () => {
    // GIVEN
    const manager = ScoreManager();
    const currentScore = new ScoreVO(0, 0, 0);

    // WHEN
    const updatedScore = manager.update(currentScore, 'TIE');

    // THEN
    expect(updatedScore.playerWins).toBe(0);
    expect(updatedScore.computerWins).toBe(0);
    expect(updatedScore.ties).toBe(1);
  });
});