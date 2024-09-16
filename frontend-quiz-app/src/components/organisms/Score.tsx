type ScoreProps = {
  correctAnswers?: number;
  questionLength?:number;
}
export const Score:React.FC<ScoreProps> = ({correctAnswers, questionLength}) => {
  return <div>le risposte corrette sono {correctAnswers} di {questionLength} </div>;
};
