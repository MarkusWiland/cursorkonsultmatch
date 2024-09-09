import React from "react";
import { KonsultDataTable } from "../_components/KonsultDataTable";

export default function Konsulter() {
  return (
    <>
      <section className="h-[492px] md:h-[800px] flex items-center justify-center  overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(75%_67%_at_center_center,rgb(140,69,255,.5)_2%,rgb(14,0,46,.5)_72%,transparent)]" />
        <div className="container flex flex-col items-center justify-center relative mt-16 md:-mt-32">
          <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]  bg-clip-text text-transparent text-center">
            Hitta Rätt Konsult för Ditt Projekt
          </h1>
          <p className="text-sm md:text-lg text-foreground/70 max-w-sm md:max-w-xl text-center mt-5">
            Utforska vår databas av erfarna konsulter inom olika branscher och
            kompetensområden. Oavsett om du behöver specialister för kortare
            uppdrag eller långsiktiga samarbeten, har vi rätt kompetens för att
            matcha dina behov.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h1>Uppdrag</h1>
          <KonsultDataTable />
        </div>
      </section>
    </>
  );
}
