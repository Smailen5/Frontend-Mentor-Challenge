import { Background } from "../atoms/background";
import { Card, CardContent, CardHeader, CardTitle } from "../atoms/card";

type PageProps = {
  children?: React.ReactNode;
};

export const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Background>
      <div className="flex items-center justify-center py-6 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardContent>{children}</CardContent>
          </CardHeader>
        </Card>
      </div>
    </Background>
  );
};
