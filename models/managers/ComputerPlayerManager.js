import MoveVO from '../valueobjects/MoveVO';

const OPTIONS = ['ROCK', 'PAPER', 'SCISSORS']

const ComputerPlayerManager = () => {
    function chooseMove() {
        return new MoveVO(OPTIONS[Math.floor(Math.random() * OPTIONS.length)])
    }

    return { chooseMove }
};

export default ComputerPlayerManager