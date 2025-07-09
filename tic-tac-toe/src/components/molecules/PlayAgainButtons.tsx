import { useGameStore } from '../../store/gameStore';
import { Button } from '../atoms';

const PlayAgainButtons = () => {
  const { resetGame, nextRound, winner } = useGameStore();

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
          {winner !== 'tie' ? 'quit' : 'no, cancel'}
        </Button>
        <Button
          variant={'secondary'}
          styleColor={'yellow'}
          shadowSize={'small'}
          onClick={handleNextRound}
        >
          {winner !== 'tie' ? 'next round' : 'yes, restart'}
        </Button>
      </div>
    </div>
  );
};

export default PlayAgainButtons;
