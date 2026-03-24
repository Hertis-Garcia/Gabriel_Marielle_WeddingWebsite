"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Playfair_Display, EB_Garamond, Allura } from "next/font/google";
import Link from "next/link";
import localFont from "next/font/local";

const seasonsLight = localFont({
  src: "../public/fonts/theseasons-lt.otf",
});

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

      <div className="relative flex flex-col items-center w-full px-4 sm:px-6">
        {/* INVITATION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative w-full max-w-lg mx-auto shadow-xl rounded-md overflow-hidden bg-[url('/texture2.jpg')] bg-cover bg-center"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/20"></div>

          {/* IMAGE STRIP */}
          <div className="relative flex w-full overflow-hidden">
            <div className="relative h-28 sm:h-36 md:h-48 flex-1">
              <Image src="/left.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative h-28 sm:h-36 md:h-48 flex-1">
              <Image src="/middle.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative h-28 sm:h-36 md:h-48 flex-1">
              <Image
                src="/rightv2.jpg"
                alt=""
                fill
                className="object-cover w-[101%]  "
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative px-6 sm:px-8 md:px-10 pt-6 pb-10 sm:pb-12 text-center text-black">
            {/* Names */}
            <h1
              className={`${seasonsLight.className} text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[0.08em] mb-6 text-[#2f2a26]`}
            >
              GABRIEL
              <br />
              <span className={`${playfair.className}`}>&</span> MARIELLE
            </h1>

            {/* Subtitle */}
            <p
              className={`${garamond.className} tracking-[0.3em] text-xs sm:text-sm text-gray-600`}
            >
              ARE GETTING MARRIED
            </p>

            {/* COUNTDOWN */}
            <div className="mt-6 sm:mt-8 flex justify-center">
              <div className="px-6 py-4 sm:px-10 sm:py-6 rounded-lg border border-[#d8cfc2] bg-white/40 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-center">
                  <div>
                    <p
                      className={`${garamond.className} text-xl sm:text-2xl md:text-3xl font-semibold text-[#2f2a26]`}
                    >
                      {timeLeft.days}
                    </p>
                    <p className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-500 mt-1">
                      DAYS
                    </p>
                  </div>

                  <div>
                    <p
                      className={`${garamond.className} text-xl sm:text-2xl md:text-3xl font-semibold text-[#2f2a26]`}
                    >
                      {timeLeft.hours}
                    </p>
                    <p className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-500 mt-1">
                      HOURS
                    </p>
                  </div>

                  <div>
                    <p
                      className={`${garamond.className} text-xl sm:text-2xl md:text-3xl font-semibold text-[#2f2a26]`}
                    >
                      {timeLeft.minutes}
                    </p>
                    <p className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-500 mt-1">
                      MIN
                    </p>
                  </div>

                  <div>
                    <p
                      className={`${garamond.className} text-xl sm:text-2xl md:text-3xl font-semibold text-[#2f2a26]`}
                    >
                      {timeLeft.seconds}
                    </p>
                    <p className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-500 mt-1">
                      SEC
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Date */}
            <p
              className={`${garamond.className} mt-8 tracking-[0.3em] text-base font-semibold sm:text-lg md:text-2xl text-gray-600 mb-5`}
            >
              Saturday, June 20, 2026
            </p>

            {/* Venue */}
            <p className={`${garamond.className} text-s text-gray-700 mt-2`}>
              St. Michael the Archangel Parish
            </p>

            <p className={`${garamond.className} text-s text-gray-600`}>
              Gen. Evangelista Street, Poblacion, Bacoor, Cavite
            </p>

            {/* Button */}
            <div className="mt-10 flex justify-center">
              <Link
                href="/details"
                className="
                  px-8 py-3
                  sm:px-10 sm:py-4
                  md:px-12
                  text-sm sm:text-base
                  tracking-[0.3em]
                  rounded-lg
                  border border-[#d6c29a]
                  bg-[#f7efe0]
                  text-[#5a4a2f]
                  shadow-md
                  transition-all duration-300

                  hover:bg-[#e8d8b5]
                  hover:border-[#cbb184]
                  hover:shadow-lg
                  hover:-translate-y-[2px]
                "
              >
                CLICK FOR MORE DETAILS
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
