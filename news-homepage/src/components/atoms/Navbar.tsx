"use client";
import { navigationLinks } from "@/config/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed left-0 top-0 z-40 w-full bg-background">
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between p-4 px-4 pt-6 md:py-10 lg:py-14 xl:px-20 xl:pt-20">
          <Link href="/">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={40}
              height={40}
              className="md:w-14 lg:w-20"
            />
          </Link>
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <Image src={"/icon-menu.svg"} alt="menu" width={40} height={40} />
          </button>

          <div className="hidden md:block">
            <ul className="flex gap-8">
              {navigationLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-soft-red transition-colors duration-500 ease-in-out"
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
