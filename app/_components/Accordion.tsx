"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
const FAQData = [
  {
    question: "Hur fungerar KONSULTMATCH för konsulter?",
    answer: "Som konsult kan du enkelt skapa en profil, söka bland uppdrag och ansöka direkt via plattformen. Du kan också bli upptäckt av företag som letar efter dina specifika färdigheter.",
  },
  {
    question: "Hur hittar företag rätt konsulter?",
    answer: "Företag kan söka och filtrera konsulter baserat på kompetens, erfarenhet och tillgänglighet. När de hittar en match kan de kontakta konsulten direkt via KONSULTMATCH.",
  },
  {
    question: "Vad kostar det att bli medlem på KONSULTMATCH?",
    answer: "Det är helt kostnadsfritt att registrera sig som både konsult och företag. Det finns också premiumalternativ för fler funktioner och bättre synlighet.",
  },
  {
    question: "Hur säkerställs kvaliteten på konsulterna?",
    answer: "Alla konsulter granskas noggrant och företag har möjlighet att ge betyg och recensioner efter avslutat uppdrag, vilket hjälper till att upprätthålla hög standard på plattformen.",
  },
  {
    question: "Kan jag som konsult arbeta med flera företag samtidigt?",
    answer: "Ja, som konsult kan du ansöka till och arbeta med flera företag samtidigt, beroende på din tillgänglighet och projektens omfattning.",
  },
];


const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className=" py-4 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-sm md:text-lg font-bold">{question}</span>
        {isOpen ? <Minus /> : <Plus />}
      </div>
      <AnimatePresence>
        {isOpen && ( 
          <motion.div
          className="text-sm text-white/80"
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQs() {
  return (
    <section className=" py-20 bg-gradient-to-b from-[rgb(140,69,255,.3)_44%] to-black">
      <div className="container">
        <h2 className="text-2xl font-medium text-center tracking-tighter">Frågor och svar</h2>
        <div className="mt-12 max-w-[290px] md:max-w-[648px] md:mx-auto">
          {FAQData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
