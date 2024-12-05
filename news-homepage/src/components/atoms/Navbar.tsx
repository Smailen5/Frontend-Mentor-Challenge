"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed left-0 top-0 z-40 flex w-full items-center justify-between bg-background p-4">
        <Link href="/">
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
        </Link>
        <button onClick={() => setIsOpen(true)}>
          <Image src={"/icon-menu.svg"} alt="menu" width={40} height={40} />
        </button>
      </div>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
