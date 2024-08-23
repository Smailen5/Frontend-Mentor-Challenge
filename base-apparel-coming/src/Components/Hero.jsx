import { useEffect, useState } from "react";
import pattern from "../assets/bg-pattern-desktop.svg";
import FormComponent from "./FormComponent";
import LogoBrand from "./LogoBrand";
import PictureGirl from "./PictureGirl";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // funzione per aggiornare lo stato in base alla dimensione della finestra
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    // imposta la dimensione iniziale
    handleResize();

    // aggiunge evento per il resize della finestra
    window.addEventListener("resize", handleResize);

    // pulizia dell'evento al dismount del componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <>
      {/* logo visibile solo su schermi piccoli */}
      {!isDesktop && <LogoBrand />}

      <section className="w-full bg-gradient-primary sm:h-auto xl:flex xl:flex-row-reverse">
        <PictureGirl />

        <div className="relative z-0 xl:flex xl:w-full xl:flex-col">
          <img
            src={pattern}
            alt="pattern hills"
            className="absolute left-0 top-0 -z-10 hidden h-full w-full xl:block"
          />
          {/* logo visibile solo su schermi grandi */}
          {isDesktop && <LogoBrand className="xl:block" classImg="scale-125" />}

          <main className="flex items-center justify-center px-8 pb-20 pt-16 sm:px-0 xl:h-full xl:px-0 xl:py-10">
            <div className="mx-auto flex h-80 flex-col justify-between text-center sm:w-6/12 xl:h-[25rem] xl:w-[28rem] xl:text-left">
              <h1 className="text-4.5xl font-light uppercase tracking-6 text-primary sm:px-8 xl:px-0 xl:text-6xl">
                we&apos;re{" "}
                <span className="font-semibold text-neutral">coming soon</span>
              </h1>
              <p className="text-sm text-primary xl:text-base">
                Hello fellow shoppers! We&apos;re currently building our new
                fashion store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>

              <FormComponent />
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Hero;
