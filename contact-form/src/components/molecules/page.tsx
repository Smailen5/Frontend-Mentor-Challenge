import { Background } from "../atoms/background";
import { Card, CardContent, CardHeader, CardTitle } from "../atoms/card";

type PageProps = {
  children?: React.ReactNode;
};

export const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Background>
      <div className="flex items-center justify-center px-4 py-8 font-Karla">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </Background>
  );
};
