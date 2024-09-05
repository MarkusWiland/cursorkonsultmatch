import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="py-4 border-b border-foreground/15 md:border-none sticky top-0 z-10">
      <div className="container">
        <div className="flex items-center justify-between border border-white/15 p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur-md">
          <div>
            <div>
              <span>Konsultmatch</span>
            </div>
          </div>
        <div className="hidden md:block">
          <nav className="flex gap-8 text-sm">
            <Link href="/" className="text-white/70 hover:text-white transition">Hem</Link>
            <Link href="/" className="text-white/70 hover:text-white transition">Hem</Link>
            <Link href="/" className="text-white/70 hover:text-white transition">Hem</Link>
            <Link href="/" className="text-white/70 hover:text-white transition">Hem</Link>
            <Link href="/" className="text-white/70 hover:text-white transition">Hem</Link>
          </nav>
        </div>
        <div className="flex gap-4 text-sm">
          <button>
          bli medlem
          </button>
          <button>
          Logga in
          </button>
          <span className="md:hidden">menuicon</span>
        </div>

      </div>
      </div>
    </header>
  );
}
