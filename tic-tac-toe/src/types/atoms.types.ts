import { Player } from "./game.types";

export interface BoxStatisticsProps {
  children: React.ReactNode;
  className: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface GameButtonProps {
  position: number;
  value: Player | null;
}

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export interface PlayerMarkButtonProps {
  children: React.ReactNode;
  buttonPlayer: "player-x" | "player-o";
  playerSelection: "player-x" | "player-o";
  handlePlayerSelection: (playerSelection: "player-x" | "player-o") => void;
}
