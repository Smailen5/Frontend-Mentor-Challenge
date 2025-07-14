import { Player } from "./game.types";

export interface WinnerMessageProps {
  winner: Player | "tie"| null;
  gameMode: "multiplayer" | "cpu";
}
