"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed left-0 top-0 z-40 flex w-full items-center justify-between bg-background p-4 pt-6">
        <Link href="/">
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
        </Link>
        <button onClick={() => setIsOpen(true)}>
          <Image src={"/icon-menu.svg"} alt="menu" width={40} height={40} />
        </button>
      </nav>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
