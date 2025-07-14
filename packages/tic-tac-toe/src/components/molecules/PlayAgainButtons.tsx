import { useGameStore } from '../../store/gameStore';
import { Button } from '../atoms';

const PlayAgainButtons = () => {
  const { resetGame, nextRound, winner, gameMode } = useGameStore();

  const handleQuit = () => {
    resetGame();
  };

  const handleNextRound = () => {
    nextRound();
  };
  return (
    <div className='flex justify-center'>
      <div className='space-x-4'>
        <Button
          variant={'secondary'}
          styleColor={'silver'}
          shadowSize={'small'}
          onClick={handleQuit}
        >
          {gameMode === "cpu" && winner === "tie" ? "no, cancel" : 'quit'}
        </Button>
        <Button
          variant={'secondary'}
          styleColor={'yellow'}
          shadowSize={'small'}
          onClick={handleNextRound}
        >
          {gameMode === "cpu" && winner === "tie" ? "yes, restart" : "next round"}
        </Button>
      </div>
    </div>
  );
};

export default PlayAgainButtons;
