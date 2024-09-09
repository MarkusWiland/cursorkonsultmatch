"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  title: string;
  description: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40  rounded-xl h-full w-full"
                : " rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
            transition={{
              duration: 0.25,
              ease: "easeIn",
            }}
          >
            {selected?.id === card.id ? (
              <SelectedCard selected={selected} />
            ) : (
              // Hide text when the card is selected, only show when not selected
              <ImageComponent card={card} isSelected={false} />
            )}
          </motion.div>
        </div>
      ))}

      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black rounded-lg opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
    
      />
    </div>
  );
};

const ImageComponent = ({
  card,
  isSelected,
}: {
  card: Card;
  isSelected: boolean;
}) => {
  return (
    <motion.div
      layoutId={`image-${card.id}-image`}
      className={cn(
        "absolute inset-0 h-full w-full p-2.5 border border-white/10 rounded-xl transition duration-200"
      )}
    >
      {/* Conditionally render title and description only when card is not selected */}
      {!isSelected && (
        <>
          <h1 className="text-white text-2xl font-bold">{card?.title}</h1>
          <p className="text-white text-sm">{card?.description}</p>
        </>
      )}
    </motion.div>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-start rounded-lg shadow-2xl relative z-[60] pt-10">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="relative h-full px-8 pb-4 z-[70]"
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col flex-1">
            <h1 className="text-white text-2xl font-bold">{selected?.title}</h1>
            <p className="text-white text-sm mt-2">{selected?.description}</p>
          </div>
          <div className="flex gap-4 mt-4">
            <Button>Läs mer om uppdraget</Button>
            <Button>Sök uppdrag</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
