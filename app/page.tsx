"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Playfair_Display, EB_Garamond, Allura } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const weddingDate = new Date("2026-06-20T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-neutral-900 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-40"></div>

      <div className="relative flex flex-col items-center">
        {/* INVITATION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative max-w-xl shadow-xl rounded-md overflow-hidden 
             bg-[url('/texture2.jpg')] bg-cover bg-center"
        >
          {/* LIGHT OVERLAY FOR READABILITY */}
          <div className="absolute inset-0 bg-white/20"></div>

          {/* IMAGE STRIP */}
          <div className="relative grid grid-cols-3 w-full">
            <div className="relative h-36">
              <Image
                src="/leff5.jpg"
                alt="Couple Photo 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-36">
              <Image
                src="/middle.jpg"
                alt="Couple Photo 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-36">
              <Image
                src="/right.jpg"
                alt="Couple Photo 3"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative p-10 text-center text-black">
            <p
              className={`${garamond.className} tracking-[0.3em] text-sm text-gray-600`}
            >
              AS THEY BEGIN THEIR FOREVER
            </p>
            <p className={`${allura.className} text-xl mt-4 text-gray-700`}>
              the wedding of
            </p>
            <h1
              className={`${playfair.className} text-5xl leading-tight tracking-wide`}
            >
              MARIELLE
              <br />& GABRIEL
            </h1>

            {/* COUNTDOWN */}
            <div className="mt-8 flex justify-center">
              <div
                className="
      px-6 py-4
      rounded-md
      border border-[#d8cfc2]
      bg-white/30 backdrop-blur-sm
      shadow-[0_2px_12px_rgba(0,0,0,0.04)]
    "
              >
                <div className="flex gap-6 text-center">
                  <div>
                    <p
                      className={`${garamond.className} text-2xl font-semibold text-[#2f2a26]`}
                    >
                      {timeLeft.days}
                    </p>
                    <p className="text-[10px] tracking-[0.25em] text-gray-500 mt-1">
                      DAYS
                    </p>
                  </div>

                  <div>
                    <p
                      className={`${garamond.className} text-2xl font-semibold text-[#2f2a26]`}
                    >
                      {timeLeft.hours}
                    </p>
                    <p className="text-[10px] tracking-[0.25em] text-gray-500 mt-1">
                      HOURS
                    </p>
                  </div>

                  <div>
                    <p
                      className={`${garamond.className} text-2xl font-semibold text-[#2f2a26]`}
                    >
                      {timeLeft.minutes}
                    </p>
                    <p className="text-[10px] tracking-[0.25em] text-gray-500 mt-1">
                      MIN
                    </p>
                  </div>

                  <div>
                    <p
                      className={`${garamond.className} text-2xl font-semibold text-[#2f2a26]`}
                    >
                      {timeLeft.seconds}
                    </p>
                    <p className="text-[10px] tracking-[0.25em] text-gray-500 mt-1">
                      SEC
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-lg font-bold tracking-wide">
              Saturday, June 20, 2026
            </p>

            <p className={`${garamond.className} text-sm text-gray-700 mt-2`}>
              St. Michael the Archangel Parish
            </p>

            <p className={`${garamond.className} text-xs text-gray-600`}>
              Gen. Evangelista Street, Poblacion, Bacoor, Cavite
              <br />
              Bacoor, Cavite
            </p>

            <div className="mt-10 flex justify-center">
              <button
                className="
                  px-8 py-3
                  text-sm tracking-[0.25em]
                  rounded-md
                  border border-[#d6c29a]
                  bg-[#f7efe0]
                  text-[#5a4a2f]
                  shadow-sm
                  transition-all duration-300

                  hover:bg-[#e8d8b5]
                  hover:border-[#cbb184]
                  hover:shadow-md
                  hover:-translate-y-[1px]
                "
              >
                CLICK FOR MORE DETAILS
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
