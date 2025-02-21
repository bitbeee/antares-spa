"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import About from "./About";
import Services from "./Service";

export default function Antares() {
  return (
    <div className="h-full flex flex-col gap-x-7">
      <Header isAntaresPage={true} />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
