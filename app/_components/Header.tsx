import Link from "next/link";
import React from "react";
import { AvatarHeader } from "./Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const dropDownMenu = [
  {
    label: "Profil",
    href: "/profile",
  },
  {
    label: "Subscription",
    href: "/subscription",
  },
];
export default function Header() {
  return (
    <header className="py-4 border-b border-foreground/15 md:border-none sticky top-0 z-[100] sm:px-4">
      <div className="container">
        <div className="flex items-center justify-between border border-white/15 p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur-md">
          <div>
            <div className="border border-white/35 p-1.5 rounded-md">
              <span>KM</span>
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition"
              >
                Hem
              </Link>
              <Link
                href="/konsulter"
                className="text-white/70 hover:text-white transition"
              >
                Konsulter
              </Link>
              <Link
                href="/uppdrag"
                className="text-white/70 hover:text-white transition"
              >
                Uppdrag
              </Link>
              <Link
                href="/om"
                className="text-white/70 hover:text-white transition"
              >
                Om
              </Link>
              <Link
                href="/"
                className="text-white/70 hover:text-white transition"
              >
                Kontakt
              </Link>
            </nav>
          </div>
          <div className="flex gap-4 text-sm">
            {true ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:none focus:ring-0 focus:border-none">
                  <AvatarHeader />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-[120] text-white border border-[rgb(72,32,138)]/60 bg-[rgb(72,32,138)]">
                  <DropdownMenuLabel>Mitt Konto</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[rgb(40,20,73)]" />
                  {dropDownMenu.map((item) => (
                    <DropdownMenuItem
                      key={item.label}
                      className="cursor-pointer hover:bg-[rgb(72,32,138)]/30"
                    >
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator className="bg-[rgb(40,20,73)]" />
                  <DropdownMenuItem className="cursor-pointer">
                    Logga ut
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <span className="md:hidden">menuicon</span>
            )}

            <span className="md:hidden">menuicon</span>
          </div>
        </div>
      </div>
    </header>
  );
}
