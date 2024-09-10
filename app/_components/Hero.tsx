import React from "react";
import { Button } from "./Button";

export default function Hero() {
  return (
    <section className="h-[492px] md:h-[800px] flex items-center justify-center  overflow-hidden relative sm:px-4">
      <div className="absolute inset-0 bg-[radial-gradient(75%_67%_at_center_center,rgb(140,69,255,.5)_2%,rgb(14,0,46,.5)_72%,transparent)]" />
      <div className="container flex flex-col items-center justify-center relative mt-16 md:-mt-32">
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]  bg-clip-text text-transparent text-center">
          KONSULTMATCH
        </h1>
        <p className="text-sm md:text-lg text-foreground/70 max-w-xs md:max-w-xl text-center mt-5">
          Konsultmatch.se är en plattform som enkelt kopplar samman konsulter och
          företag. Konsulter kan utforska jobbuppdrag från företag, medan
          företag kan söka efter specifika konsulter och matchas med rätt
          kompetens för sina projekt. En smidig och effektiv lösning för båda
          parter att hitta rätt samarbeten.
        </p>
        <div className="flex justify-center mt-5">
          <Button
            borderRadius=".5rem"
            rx="30%"
            ry="30%"
            duration={5000}
            className="py-2 px-4  transition"
          >
           Bli Medlem
          </Button>
          <Button
            borderRadius=".5rem"
            rx="30%"
            ry="30%"
            duration={5000}
            className="py-2 px-4  transition"
          >
            Kontakta Oss
          </Button>
        </div>
      </div>
    </section>
  );
}
