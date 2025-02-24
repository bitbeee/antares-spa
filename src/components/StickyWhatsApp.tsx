"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function StickyWhatsapp() {
  const ref = useRef<HTMLDivElement>(null);
  const prevScroll = useRef(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollDiff = window.scrollY - prevScroll.current;
      setScrollY((v) =>
        Math.min(Math.max(v - scrollDiff, 0), ref.current?.offsetHeight || 0),
      );

      prevScroll.current = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div
        className={["fixed transform z-50 bottom-0 right-0 p-8"].join(" ")}
        ref={ref}
        style={{ transform: `translate(0px, ${scrollY}px)` }}
      >
        <Link
          href={
            "https://wa.me/5562992319367?text=Olá,%20vim%20através%20do%20site"
          }
          target="_blank"
          className="block bg-green-500 text-white p-2 lg:p-4 rounded-full"
        >
          <FaWhatsapp className=" w-8 h-8 lg:w-12 lg:h-12" />
        </Link>
      </div>
    </>
  );
}
