/// <reference types="vite-plugin-svgr/client" />

import { Accordion } from "@/components/atoms/accordion";
import { Background } from "@/components/atoms/Background";
import { IconStar } from "./assets/images";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/atoms/card";
import { Page } from "./components/atoms/Page";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
