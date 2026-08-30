import { useState } from 'react';
import MoveVO from '../models/valueobjects/MoveVO';
import ScoreVO from '../models/valueobjects/ScoreVO';
import GameManager from '../models/managers/GameManager';
import ComputerPlayerManager from '../models/managers/ComputerPlayerManager';
import ScoreManager from '../models/managers/ScoreManager';

const useRockPaperScissors = () => {
  const [playerMove, setPlayerMove] = useState(null);
  const [computerMove, setComputerMove] = useState(null);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState(new ScoreVO(0, 0, 0));
  const gameManager = GameManager();
  const computerPlayManager = ComputerPlayerManager();
  const scoreManager = ScoreManager();

  const play = (playerChoice) => {
    const player = new MoveVO(playerChoice);
    const computer = computerPlayManager.chooseMove();
    const game = gameManager.play(player, computer);
    const scoreUpdate = scoreManager.update(score, game.winner);

    setPlayerMove(player);
    setComputerMove(computer);
    setWinner(game.winner);
    setScore(scoreUpdate);
  };

  return { playerMove, computerMove, winner, score, play };
};

export default useRockPaperScissors;
