"use client";

import Image from "next/image";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Work from "@/components/Work";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Work />
      <Contact />
    </>
  );
}
