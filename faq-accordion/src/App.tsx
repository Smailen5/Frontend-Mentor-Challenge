/// <reference types="vite-plugin-svgr/client" />
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";
import { Background } from "@/components/atoms/Background";
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
                <IconStar className="size-6" />
                <CardTitle>FAQs</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="">
                      What is Frontend Mentor, and how will it help me?
                    </AccordionTrigger>
                    <AccordionContent>
                      testo di prova testo di prova testo di prova testo di
                      prova testo di prova testo di prova testo di prova testo
                      di prova testo di prova testo di prova testo di prova
                      testo di prova testo di prova testo di prova testo di
                      prova testo di prova
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Is Frontend Mentor free?
                    </AccordionTrigger>
                    <AccordionContent>
                      testo di prova testo di prova testo di prova testo di
                      prova testo di prova testo di prova testo di prova testo
                      di prova testo di prova testo di prova
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Can i use Frontend Mentor projects in my portfolio?
                    </AccordionTrigger>
                    <AccordionContent>
                      testo di prova testo di prova testo di prova testo di
                      prova testo di prova testo di prova testo di prova testo
                      di prova testo di prova testo di prova testo di prova
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      How ca in get help if I'm stuck on a challenge?
                    </AccordionTrigger>
                    <AccordionContent>
                      testo di prova testo di prova testo di prova testo di
                      prova testo di prova testo di prova testo di prova testo
                      di prova testo di prova testo di prova testo di prova
                      testo di prova testo di prova testo di prova testo di
                      prova testo di prova testo di prova testo di prova
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </Page>
        </Background>
      </div>
    </>
  );
}

export default App;
