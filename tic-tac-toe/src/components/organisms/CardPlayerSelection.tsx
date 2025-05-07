import { Card } from "../atoms";
import SwitchSelection from "../molecules/SwitchSelection";

const CardSelection = () => {
  return (
    <Card className="text-center space-y-6">
      <h4 className="heading-xs">pick player 1's mark</h4>

      <SwitchSelection />

      <p className="body-m">remember : x goes first</p>
    </Card>
  );
};

export default CardSelection;
