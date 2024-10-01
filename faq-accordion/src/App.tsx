/// <reference types="vite-plugin-svgr/client" />

import { Background } from "@/components/atoms/Background";
import { Accordion } from "@/components/atoms/accordion2";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/atoms/card";
import { Page } from "./components/atoms/Page";
import { IconStar } from "./assets/images";

function App() {
  return (
    <>
      <div className="font-work-sans">
        {/* sezione page da esportare */}
        <Background>
          {/* sezione page che gestisce lo spazio */}
          <Page>
            {/* sezione card accordion */}
            <Card>
              <CardHeader>
                <IconStar className="size-6 lg:size-12" />
                <CardTitle>FAQs</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion />
              </CardContent>
            </Card>
          </Page>
        </Background>
      </div>
    </>
  );
}

export default App;
