"use client";
import React, { useRef } from "react";
import gridLines from "@/app/assets/grid-lines.png";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
export default function CallToAction() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  console.log(inView);
  return (
    <section className="py-20 md:py-24">
      <div className="container [perspective:2000px] " ref={ref}>
        <div
          className={cn(
            " border border-white/15 py-24 rounded-xl overflow-hidden relative",
            inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]"
          )}
        >
          <div
            className="absolute inset-0 bg-[rgb(72,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_40%,black,transparent)]"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          ></div>
          <div className="relative">
            <h2 className="text-3xl md:text-6xl max-w-sm md:max-w-xl mx-auto tracking-tighter font-medium text-center">
              Ta steget mot ditt nästa uppdrag!
            </h2>
            <p className="text-center text-sm  md:text-xl max-w-xs md:max-w-xl lg:max-w-2xl mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Är du konsult eller företag som letar efter rätt matchning?
              Konsultmatch.se gör det enkelt för dig att hitta uppdrag eller
              konsulter som passar just dina behov. Oavsett om du söker nya
              utmaningar eller letar efter expertis till ditt företag – vi har
              plattformen för dig. Gå med i vårt nätverk idag och öppna dörren
              till nya möjligheter.
            </p>
            <div className="flex justify-center mt-8">
              <a
                href="#"
                className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300"
              >
                Bli Medlem
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
