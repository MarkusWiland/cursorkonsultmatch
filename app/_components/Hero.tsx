import React from 'react'
import { Button } from './Button'

export default function Hero() {
  return (
    <section className='h-[492px] md:h-[800px] flex items-center justify-center relative overflow-hidden'>
      <div className="absolute inset-0 bg-[radial-gradient(75%_67%_at_center_center,rgb(140,69,255,.5)_2%,rgb(14,0,46,.5)_72%,transparent)]"/>
      <div className="container relative mt-16 md:-mt-16">
        <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]  bg-clip-text text-transparent text-center">KONSULTMATCH</h1>
        <p className="text-xl text-foreground/70 text-center">
          Konsultmatch is a platform that connects businesses with consultants.
        </p>
        <div className='flex justify-center mt-5'>
        <Button
        borderRadius="1.25rem"

        duration={5000}
        className="py-2 px-4  transition"
      >
        Starta här
      </Button>
        </div>
      </div>
    </section>
  )
}
