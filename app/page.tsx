"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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
             bg-[url('/bg_ic.png')] bg-cover bg-center"
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
            <p className="tracking-widest text-sm text-gray-600">
              WEDDING SOCIAL
            </p>

            <p className="text-xs text-gray-500 mb-4">IN HONOUR OF</p>

            <h1 className="text-5xl font-serif font-bold leading-tight">
              MARIELLE
              <br />& GABRIEL
            </h1>

            {/* COUNTDOWN */}
            <div className="mt-6 flex justify-center gap-6 text-center">
              <div>
                <p className="text-2xl font-semibold">{timeLeft.days}</p>
                <p className="text-xs tracking-widest text-gray-600">DAYS</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">{timeLeft.hours}</p>
                <p className="text-xs tracking-widest text-gray-600">HOURS</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">{timeLeft.minutes}</p>
                <p className="text-xs tracking-widest text-gray-600">MIN</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">{timeLeft.seconds}</p>
                <p className="text-xs tracking-widest text-gray-600">SEC</p>
              </div>
            </div>

            <p className="mt-6 text-lg font-bold tracking-wide">
              Saturday, June 20, 2026
            </p>

            <p className="text-sm text-gray-700 mt-2">
              St. Michael the Archangel Parish
            </p>

            <p className="text-xs text-gray-600">
              Gen. Evangelista Street, Poblacion, Bacoor, Cavite
              <br />
              Bacoor, Cavite
            </p>

            <div className="mt-8 flex justify-center">
              <button
                className="
                      px-6 py-3
                      text-sm tracking-widest
                      border border-gray-400
                      text-gray-700
                      rounded-sm
                      transition-all duration-300
                      hover:bg-[#F5E6C8]
                      hover:border-[#d6c29a]
                      hover:text-[#5a4a2f]
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
