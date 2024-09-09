import React from 'react'

export default function Kontakt() {
  return (
    <>
      <section className="h-[492px] md:h-[800px] flex items-center justify-center  overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(75%_67%_at_center_center,rgb(140,69,255,.5)_2%,rgb(14,0,46,.5)_72%,transparent)]" />
        <div className="container flex flex-col items-center justify-center relative mt-16 md:-mt-32">
          <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]  bg-clip-text text-transparent text-center">
            Kontakta oss
          </h1>
          <p className="text-sm md:text-lg text-foreground/70 max-w-sm md:max-w-xl text-center mt-5">
            Konsultmatch.se är en plattform som enkelt kopplar samman konsulter
            och företag. Konsulter kan utforska jobbuppdrag från företag, medan
            företag kan söka efter specifika konsulter och matchas med rätt
            kompetens för sina projekt. En smidig och effektiv lösning för båda
            parter att hitta rätt samarbeten.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h1>Uppdrag</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2>Uppdrag 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
              <button>Boka</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
