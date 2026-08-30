import RoundResultVO from '../valueobjects/RoundResultVO';

const BEATS = {
    ROCK: 'SCISSORS',
    SCISSORS: 'PAPER',
    PAPER: 'ROCK'
}

const GameManager = () => {
  function play(playerMove, computerMove) {
    if (playerMove.value === computerMove.value){
        return new RoundResultVO(playerMove, computerMove, 'TIE');
    }
    if (BEATS[playerMove.value] === computerMove.value){
        return new RoundResultVO(playerMove, computerMove, 'PLAYER')
    }
    return new RoundResultVO(playerMove,computerMove, 'COMPUTER')
  }

  return { play };
};

export default GameManager;