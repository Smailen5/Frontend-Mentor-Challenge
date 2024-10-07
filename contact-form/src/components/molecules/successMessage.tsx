import { Success } from "@/assets/images";

type SuccessMessageType = {
  visible: boolean;
};

export const SuccessMessage: React.FC<SuccessMessageType> = ({ visible }) => {
  return (
    <div
      className={`absolute top-0 space-y-2 rounded-xl bg-foreground p-6 text-white
        transition-all duration-500 ${visible ? "opacity-100" : "opacity-0 -top-20"}`}
    >
      <header className="flex items-center gap-2">
        <Success />
        <h2 className="font-bold">Message Sent!</h2>
      </header>
      <p className="text-secondary-foreground">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </div>
  );
};
