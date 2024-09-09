"use client";
import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
const accordionData = [
  {
    title: "Konsulter",
    content: "Konsulter",
  },
  {
    title: "Företag",
    content: "Företag",
  },
];
export default function AccordionComp() {
  const accordionRef = useRef<HTMLDivElement>(null);
  const accordionX = useMotionValue(0);
  const accordionY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${accordionX}px ${accordionY}px, black, transparent)`;

  useEffect(() => {
    const accordion = accordionRef.current;
    if (accordion) {
      const { x, y } = accordion.getBoundingClientRect();

      accordionX.set(x);
      accordionY.set(y);
    }
  }, []);
  return (
    <section>
      <div className="container">
        <h2 className="text-2xl font-medium text-center">Konsulter</h2>
        <Accordion
          type="single"
          collapsible
          className="mx-auto py-10 flex flex-col gap-5"
        >
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              ref={accordionRef}
              value={`item-${index}`}
              className="border border-white/15 p-2.5 rounded-xl"
            >
            
              <AccordionTrigger>
                <div className="flex items-center gap-2.5">
                  <span>Icon</span>
                  <span className="text-lg font-medium">{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
