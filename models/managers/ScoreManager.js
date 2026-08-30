import ScoreVO from '../valueobjects/ScoreVO'

const ScoreManager = () => {
    function update(currentScore, winner) {
        if (winner === 'PLAYER') {
            return new ScoreVO(currentScore.playerWins + 1, currentScore.computerWins, currentScore.ties)
        }
        if (winner === 'COMPUTER') {
            return new ScoreVO(currentScore.playerWins, currentScore.computerWins + 1, currentScore.ties)
        }
        if (winner === 'TIE') {
            return new ScoreVO(currentScore.playerWins, currentScore.computerWins, currentScore.ties + 1)
        }
    }

    return { update }
};

export default ScoreManager;