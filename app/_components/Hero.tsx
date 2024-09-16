"use client";
import React from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="h-[492px] md:h-[800px] flex items-center justify-center  overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(75%_67%_at_center_center,rgb(140,69,255,.5)_2%,rgb(14,0,46,.5)_72%,transparent)]" />
      <div className="container flex flex-col items-center justify-center relative mt-16 md:-mt-32">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-6xl lg:text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-clip-text text-transparent text-center"
        >
          KONSULTMATCH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-sm md:text-lg text-foreground/70 max-w-xs md:max-w-xl text-center mt-5"
        >
          Konsultmatch.se är en plattform som enkelt kopplar samman konsulter
          och företag. Konsulter kan utforska jobbuppdrag från företag, medan
          företag kan söka efter specifika konsulter och matchas med rätt
          kompetens för sina projekt. En smidig och effektiv lösning för båda
          parter att hitta rätt samarbeten.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center mt-5"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="py-2 px-4 mx-[1px] my-[1px]">Bli Medlem</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="py-2 px-4 mx-[1px] my-[1px]">
              Kontakta Oss
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
