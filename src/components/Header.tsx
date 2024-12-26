"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <div className="flex text-white bg-black py-3 ">
      <div className="flex-1 flex gap-8  text-[20px] items-center text-center justify-between px-20">
      {/* Portfolio Link */}
      <div className="text-[30px] font-semibold">
        <Link href="/">Portfolio</Link>
      </div>

      {/* Desktop Navbar (Visible on larger screens) */}
      <div className="hidden md:flex">
        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="aboutme">About Me</Link>
          </li>
          <li>
            <Link href="services">Services</Link>
          </li>
          <li>
            <Link href="skills">Skills</Link>
          </li>
          <li>
            <Link href="projects">Projects</Link>
          </li>
          <li>
            <Link href="contactme">Contact</Link>
          </li>
        </ul>
      </div>
      </div>

  
      <div className="md:hidden">
     
        <Sheet>
          <SheetTrigger asChild>
          <Button className="text-2xl  ">&#9776;</Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white">
            <SheetHeader>
              <SheetTitle className="text-black">Menu</SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col gap-4 text-black">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="aboutme">About Me</Link>
                  </li>
                  <li>
                    <Link href="services">Services</Link>
                  </li>
                  <li>
                    <Link href="skills">Skills</Link>
                  </li>
                  <li>
                    <Link href="projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="contactme">Contact</Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  
  );
};

export default Header;
