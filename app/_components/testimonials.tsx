"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import avatar from "@/app/assets/avatar.png";
const testimonials = [
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien.",
    title: "CEO",
    image: avatar,
  },
  {
    name: "Anna Svensson",
    text: "Fantastisk service och produkt! Jag kan verkligen rekommendera detta företag till alla som söker kvalitet och pålitlighet.",
    title: "Marknadschef",
    image: avatar,
  },
  {
    name: "Erik Lindberg",
    text: "Som utvecklare uppskattar jag verkligen de innovativa lösningarna som erbjuds. Det har revolutionerat vårt arbetssätt.",
    title: "Senior Utvecklare",
    image: avatar,
  },
  {
    name: "Maria Öberg",
    text: "Kundtjänsten är enastående. De går alltid den extra milen för att säkerställa kundnöjdhet. Mycket imponerande!",
    title: "Kundrelationschef",
   image: avatar,
  },
];

export default function Testimonials() {
  const controls = useAnimation();
  const x = useMotionValue(0);

  const startAnimation = () => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 50,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  };

  const stopAnimation = () => {
    controls.stop();
  };

  useEffect(() => {
    startAnimation();
    return () => stopAnimation();
  }, [controls, startAnimation, stopAnimation]); // Lägg till beroenden
    return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium ">
          Upptäck de senaste konsultuppdragen
        </h2>
        <p className="text-lg md:text-xl text-center mt-5 tracking-tight text-foreground/70 max-w-sm md:max-w-xl mx-auto">
          Håll dig uppdaterad med de senaste möjligheterna! Här hittar du de
          senaste 10 uppdragen från företag som söker efter rätt kompetens.
          Säkra ditt nästa uppdrag idag.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            style={{ x }}
            animate={controls}
            onHoverStart={stopAnimation}
            onHoverEnd={startAnimation}
            className="flex gap-5 flex-none pr-5"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="border md:p-10 border-white/15 p-6 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-sm  md:max-w-md flex-none"
              >
                <div className="text-lg tracking-tight md:text-1xl">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-lg grayscale"
                    />
                  </div>
                  <div className="">
                    <div>{testimonial.name}</div>
                    <div className="text-white/50 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
