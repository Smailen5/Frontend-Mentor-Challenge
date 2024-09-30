/// <reference types="vite-plugin-svgr/client" />
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Background } from "./components/atoms/Background";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/atoms/card";
import { Page } from "./components/atoms/Page";
// import { IconPlus } from "./assets/images/index";

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
              <CardTitle>FAQs</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What is Frontend Mentor, and how will it help me?
                    {/* <IconPlus /> */}
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          {/* <section className="h-1/2 w-1/2 bg-card"></section> */}
        </Page>
      </Background>
    </>
  );
}

export default App;
