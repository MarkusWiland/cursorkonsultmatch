import React from "react";
import { LayoutGridDemo } from "../_components/uppdrag/LayoutGrid";

export default function Uppdrag() {
  return (
    <>
      <section className="h-[492px] md:h-[800px] flex items-center justify-center  overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(75%_67%_at_center_center,rgb(140,69,255,.5)_2%,rgb(14,0,46,.5)_72%,transparent)]" />
        <div className="container flex flex-col items-center justify-center relative mt-16 md:-mt-32">
          <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]  bg-clip-text text-transparent text-center">
            Utforska Spännande Uppdrag
          </h1>
          <p className="text-sm md:text-lg text-foreground/70 max-w-sm md:max-w-xl text-center mt-5">
            Välj bland aktuella konsultuppdrag och hitta ditt nästa projekt.
            Våra uppdrag sträcker sig över olika branscher och kompetensområden,
            skräddarsydda för dig som söker nya utmaningar och möjligheter.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h1>Uppdrag</h1>
         <LayoutGridDemo />
        </div>
      </section>
    </>
  );
}
