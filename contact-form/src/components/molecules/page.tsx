import { useEffect, useState } from "react";
import { Background } from "../atoms/background";
import { Card, CardContent, CardHeader, CardTitle } from "../atoms/card";
import { SuccessMessage } from "./successMessage";

type PageProps = {
  children?: React.ReactNode;
  isSubmitted?: boolean;
};

export const Page: React.FC<PageProps> = ({ children, isSubmitted }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isSubmitted]);

  return (
    <Background>
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8 font-Karla">
        <SuccessMessage visible={visible} />
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </Background>
  );
};
