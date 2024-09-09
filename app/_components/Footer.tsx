import React from "react";

export default function Footer() {
  return (
    <section className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row items-center">
          <div className="flex items-center gap-2 lg:flex-1">
            <span>logo</span>
            <div className="font-medium">KonsultMatch.se</div>
          </div>
          <div>
            <nav className="flex flex-col gap-5 lg:flex-row lg:gap-7 lg:flex-1 lg:justify-center">
              <a href="#">Konsulter</a>
              <a href="#">Uppdrag</a>
              <a href="#">Om oss</a>
              <a href="#">Kontakt</a>
              <a href="#">FAQ</a>
            </nav>
          </div>
          <div className="flex gap-5 flex-1 lg:justify-end">
            <span>logo</span>
            <span>logo</span>
            <span>logo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
