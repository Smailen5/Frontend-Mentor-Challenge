import { Card } from "../atoms";
import { SwitchSelection } from "../molecules";

const CardSelection = () => {
  return (
    <Card className="space-y-6 text-center">
      <h4 className="heading-xs">pick player 1's mark</h4>

      <SwitchSelection />

      <p className="body-m">remember : x goes first</p>
    </Card>
  );
};

export default CardSelection;
