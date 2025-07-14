import { Player } from './game.types';

interface BaseProps {
  children: React.ReactNode;
  className?: string;
}

export interface BoxStatisticsProps extends BaseProps {
  className: string;
}

export type CardProps = BaseProps;

export interface GameButtonProps {
  position: number;
  value: Player | null;
}

export type LayoutProps = BaseProps;

export interface PlayerMarkButtonProps {
  children: React.ReactNode;
  buttonPlayer: 'player-x' | 'player-o';
  playerSelection: 'player-x' | 'player-o';
  handlePlayerSelection: (playerSelection: 'player-x' | 'player-o') => void;
}

export type ModalProps = BaseProps;
