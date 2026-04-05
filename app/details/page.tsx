"use client";

import { Playfair_Display, EB_Garamond, Allura } from "next/font/google";
import { cormorant } from "../page";
import { seasons } from "../page";
import { useEffect } from "react";
import { motion } from "framer-motion";

const venueName = "St. Michael the Archangel Parish";
const venueAddress = "Gen. Evangelista Street, Poblacion, Bacoor, Cavite";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400", "500"] });
const allura = Allura({ subsets: ["latin"], weight: ["400"] });

const WeddingCalendar = () => {
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  const days = [
    null,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    null,
    null,
    null,
    null,
  ];

  return (
    <div
      className="
        relative
        bg-[#f4efe7]
        border border-[#d6c29a]/50
        rounded-t-[140px] md:rounded-t-[180px] rounded-b-[24px]

        px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8
        max-w-[260px] sm:max-w-[320px] md:max-w-[420px] mx-auto

        shadow-[0_16px_40px_rgba(0,0,0,0.12),0_8px_20px_rgba(0,0,0,0.08)]

        before:absolute before:inset-0 before:rounded-t-[140px] md:before:rounded-t-[180px] before:rounded-b-[24px]
        before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4),inset_0_0_30px_rgba(214,194,154,0.25)]
        before:pointer-events-none

        after:absolute after:top-0 after:left-0 after:w-full after:h-1/2
        after:bg-gradient-to-b after:from-white/25 after:to-transparent
        after:rounded-t-[140px] md:after:rounded-t-[180px]
        after:pointer-events-none
      "
    >
      {/* MONTH */}
      <div className="text-center mb-4 md:mb-5">
        <h3
          className={`${playfair.className} text-xl sm:text-2xl md:text-3xl text-[#2f2a26]`}
        >
          June
        </h3>
        <p
          className={`${allura.className} text-sm sm:text-base md:text-lg text-[#bfa46f]`}
        >
          2026
        </p>
      </div>

      {/* WEEK DAYS */}
      <div className="grid grid-cols-7 text-center mb-2">
        {weekDays.map((d) => (
          <span
            key={d}
            className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-[#b0a79c]"
          >
            {d}
          </span>
        ))}
      </div>

      {/* DAYS */}
      <div className="grid grid-cols-7 gap-y-2 md:gap-y-3 text-center">
        {days.map((day, i) => (
          <div
            key={i}
            className="flex justify-center items-center h-7 sm:h-9 md:h-11"
          >
            {day === 20 ? (
              <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 flex items-center justify-center bg-[#c9a96a] text-white rounded-full text-sm md:text-base shadow-md">
                {day}
              </div>
            ) : (
              <span
                className={`${garamond.className} text-sm sm:text-base md:text-lg text-[#4a453f]`}
              >
                {day || ""}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function DetailsPage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2 },
    },
  };
  return (
    <main className="relative min-h-screen flex justify-center bg-neutral-900">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 bg-[url('/texture2.jpg')] bg-fixed "></div>

      {/* CONTENT WRAPPER */}
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full text-[#2f2a26]"
      >
        <nav className="fixed top-0 w-full flex justify-center py-4 md:py-6 z-50 backdrop-blur-sm bg-black/20 overflow-x-auto">
          <div className="flex gap-6 md:gap-10 text-[10px] md:text-sm tracking-[0.25em] md:tracking-[0.3em] text-white whitespace-nowrap px-4">
            <button onClick={() => scrollToSection("story")}>
              PRENUP VIDEO
            </button>
            <button onClick={() => scrollToSection("entourage")}>
              ENTOURAGE
            </button>
            <button onClick={() => scrollToSection("details")}>DETAILS</button>
            <button onClick={() => scrollToSection("rsvp")}>RSVP</button>
          </div>
        </nav>

        {/* ================= STORY ================= */}
        <section
          id="story"
          className="relative flex flex-col items-center text-center px-4 md:px-6 py-20 fade-in"
        >
          {/* Background */}
          <div className="absolute inset-0  "></div>

          <div className="relative z-10 w-full">
            {/* TEXT CONTENT (kept centered & narrow) */}
            <div className="max-w-4xl mx-auto space-y-5">
              <p
                className={`${seasons.className} tracking-[0.25em] md:tracking-[0.3em] text-lg md:text-xl`}
              >
                THE WEDDING OF
              </p>

              <h1
                className={`${cormorant.className} text-3xl sm:text-5xl md:text-7xl leading-tight`}
              >
                GABRIEL{" "}
                <span className={`${playfair.className} text-[#6b5b3e] italic`}>
                  &
                </span>{" "}
                MARIELLE
              </h1>
            </div>

            {/* 🎬 LARGE VIDEO (balanced width) */}
            <div className="w-full max-w-5xl mx-auto mt-10 px-2 md:px-8">
              <div className="bg-white p-3 md:p-4 shadow-xl md:shadow-2xl">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/GTTsVaOA_AY"
                  />
                </div>
              </div>
            </div>

            {/* LOWER TEXT */}
            <div className="max-w-4xl mx-auto space-y-4 mt-10">
              <div className="max-w-4xl mx-auto space-y-4 mt-10">
                <p className={`${seasons.className} text-xs md:text-2xl `}>
                  REQUEST THE HONOR OF YOUR PRESENCE
                  <br />
                  AS WE UNITE IN THE SACRAMENT OF HOLY MATRIMONY
                </p>

                <p className={`${seasons.className} text-xs md:text-2xl `}>
                  SATURDAY, THE TWENTIETH OF JUNE
                  <br />
                  TWO THOUSAND AND TWENTY SIX
                  <br />
                  AT TWO O’CLOCK IN THE AFTERNOON
                </p>

                <p className={`${seasons.className} text-xs md:text-2xl`}>
                  ST. MICHAEL THE ARCHANGEL PARISH
                  <br />
                  GEN. EVANGELISTA STREET, POBLACION, BACOOR, CAVITE
                </p>

                <p className={`${seasons.className} text-xs md:text-2xl`}>
                  RECEPTION TO FOLLOW IMMEDIATELY AT THE
                  <br />
                  ASRIBALI COUNTRYSIDE GARDEN, BACOOR CAVITE
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= DIVIDER ================= */}
        <div className="flex justify-center my-2 md:my-2">
          <div className="w-64 md:w-128 h-[2px] bg-black" />
        </div>

        {/* ================= ENTOURAGE ================= */}
        <section
          id="entourage"
          className="
    py-16 md:py-24 px-4 md:px-6 text-center fade-in

  "
        >
          <div className="max-w-3xl mx-auto">
            {/* TOP FLOWER */}
            <div className="flex justify-center mb-6 md:mb-8 -mt-10 md:-mt-16">
              {" "}
              <img
                src="/flower.png"
                alt="Attire Guide"
                className="w-[210px] sm:w-[210px] md:w-[420px] h-auto object-contain"
              />
            </div>
            <h2
              className={`${seasons.className} text-2xl sm:text-3xl md:text-5xl tracking-[0.25em] mb-10 md:mb-12`}
            >
              ENTOURAGE
            </h2>

            {/* PRINCIPAL SPONSORS */}
            {/* ================= PRINCIPAL SPONSORS ================= */}
            <div className="mb-10 md:mb-12 text-center">
              <p
                className={`${seasons.className} tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm mb-2`}
              >
                PRINCIPAL SPONSORS
              </p>

              <div className="grid grid-cols-2 gap-x-6 md:gap-x-16 justify-center">
                {/* LEFT COLUMN */}
                <div
                  className={`${seasons.className} flex flex-col items-end text-xs sm:text-sm md:text-3xl tracking-[0.02em] space-y-[2px] sm:space-y-1 md:space-y-2`}
                >
                  <p className="whitespace-nowrap">
                    Mr. Jose Labrador Oblefias
                  </p>
                  <p className="whitespace-nowrap">Mr. Darwin Garcia</p>
                  <p className="whitespace-nowrap">Mr. Leo Mascariñas</p>
                  <p className="whitespace-nowrap">Mr. George La Salle</p>
                  <p className="whitespace-nowrap">Engr. Fernando Balbarino</p>
                  <p className="whitespace-nowrap">Mr. Ronnie Javier</p>
                  <p className="whitespace-nowrap">Mr. Erwin Nethercott</p>
                  <p className="whitespace-nowrap">
                    Mr. Rafael Gallego Hortigosa
                  </p>
                </div>

                {/* RIGHT COLUMN */}
                <div
                  className={`${seasons.className} flex flex-col items-start text-xs sm:text-sm md:text-3xl tracking-[0.02em] space-y-[2px] sm:space-y-1 md:space-y-2`}
                >
                  <p className="whitespace-nowrap">Mrs. Nariza Oblefias</p>
                  <p className="whitespace-nowrap">Mrs. Delia Garcia</p>
                  <p className="whitespace-nowrap">Dra. Michele Fajardo</p>
                  <p className="whitespace-nowrap">Dra. Noravi Delgado</p>
                  <p className="whitespace-nowrap">Mrs. Grace Cruzada</p>
                  <p className="whitespace-nowrap">Mrs. Amalia Espiritu</p>
                  <p className="whitespace-nowrap">Mrs. Noraida Nethercott</p>
                  <p className="whitespace-nowrap">Mrs. Marilyn Hortigosa</p>
                  <p className="whitespace-nowrap">Mrs. Marietta Cheng</p>
                </div>
              </div>
            </div>

            {/* BEST MEN / HONOR */}
            <div className="grid grid-cols-2 gap-x-6 md:gap-x-16 mb-8 md:mb-10">
              <div
                className={`${seasons.className} text-right text-xs sm:text-sm md:text-3xl tracking-[0.02em] space-y-[2px] sm:space-y-1 md:space-y-2`}
              >
                <p className="tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm mb-2">
                  BEST MEN
                </p>
                <p>Mr. Mark Adrian Pabalan</p>
                <p>Mr. Erickson Pabalan</p>
              </div>

              <div
                className={`${seasons.className} whitespace-nowrap min-w-max text-left text-xs sm:text-sm md:text-3xl tracking-[0.02em] space-y-[2px] sm:space-y-1 md:space-y-2`}
              >
                <p className="tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm mb-2">
                  MAID OF HONOR
                </p>
                <p>Ms. Maryll Camille Cantillo</p>

                <p className="tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm mt-4 mb-2">
                  MATRON OF HONOR
                </p>
                <p>Mrs. Michelle Delos Reyes</p>
              </div>
            </div>

            {/* GROOMSMEN / BRIDESMAIDS */}
            <div className="grid grid-cols-2 gap-x-6 md:gap-x-16 mb-10 md:mb-12">
              <div
                className={`${seasons.className} text-right text-xs sm:text-sm md:text-3xl tracking-[0.02em] space-y-[2px] sm:space-y-1 md:space-y-2`}
              >
                <p className="tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm mb-2">
                  GROOMSMEN
                </p>
                <p>Mr. Jeffrey Millado</p>
                <p>Mr. John Mark Gonzales</p>
                <p>Mr. Jermelle Fresnosa</p>
                <p className="whitespace-nowrap">Mr. Jeoffrey Francis Arma</p>
                <p>Mr. King Philip Pabalan</p>
              </div>

              <div
                className={`${seasons.className} whitespace-nowrap min-w-max text-left text-xs sm:text-sm md:text-3xl tracking-[0.02em] space-y-[2px] sm:space-y-1 md:space-y-2`}
              >
                <p className="tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm mb-2">
                  BRIDESMAIDS
                </p>
                <p>Mrs. Fatima Reyes</p>
                <p>Mrs. Jesserene Camille Gonzales</p>
                <p>Mrs. Vanessa Rose Fresnosa</p>
                <p>Mrs. Ma. Roxanne Arma</p>
                <p>Mrs. Arianne Que</p>
              </div>
            </div>

            {/* SECONDARY SPONSORS */}
            <div className="flex justify-center gap-6 md:gap-20 mb-8 md:mb-10">
              <div
                className={`${seasons.className} text-center text-[10px] sm:text-sm md:text-3xl tracking-[0.02em] whitespace-nowrap space-y-[2px] sm:space-y-1 md:space-y-2`}
              >
                <p className="tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm mb-2">
                  CORD
                </p>
                <p>Daryll James Garcia</p>
                <p>Angelique Caballo</p>
              </div>

              <div
                className={`${seasons.className} text-center text-[10px] sm:text-sm md:text-3xl tracking-[0.02em] whitespace-nowrap space-y-[2px] sm:space-y-1 md:space-y-2`}
              >
                <p className="tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm mb-2">
                  VEIL
                </p>
                <p>John Conrad Aranda</p>
                <p>Crystal Aranda</p>
              </div>

              <div
                className={`${seasons.className} text-center text-[10px] sm:text-sm md:text-3xl tracking-[0.02em] whitespace-nowrap space-y-[2px] sm:space-y-1 md:space-y-2`}
              >
                <p className="tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm mb-2">
                  CANDLE
                </p>
                <p>Erickson Jean Pabalan</p>
                <p>Danica Paz Garcia</p>
              </div>
            </div>

            {/* BEARERS */}
            <div className="flex justify-center gap-6 md:gap-20 mb-8 md:mb-10">
              <div
                className={`${seasons.className} text-center text-[10px] sm:text-sm md:text-3xl tracking-[0.02em] whitespace-nowrap space-y-[2px] sm:space-y-1 md:space-y-2`}
              >
                <p className="tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm mb-2">
                  COIN BEARER
                </p>
                <p>Noah Grayson Reyes</p>
              </div>

              <div
                className={`${seasons.className} text-center text-[10px] sm:text-sm md:text-3xl tracking-[0.02em] whitespace-nowrap space-y-[2px] sm:space-y-1 md:space-y-2`}
              >
                <p className="tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm mb-2">
                  RING BEARER
                </p>
                <p>Kaiden Ezekiel Aranda</p>
              </div>

              <div
                className={`${seasons.className} text-center text-[10px] sm:text-sm md:text-3xl tracking-[0.02em] whitespace-nowrap space-y-[2px] sm:space-y-1 md:space-y-2`}
              >
                <p className="tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm mb-2">
                  BIBLE BEARER
                </p>
                <p>Leon Atlas Montes</p>
              </div>
            </div>

            {/* FLOWER GIRLS */}
            <div
              className={`${seasons.className} text-xs sm:text-sm md:text-3xl tracking-[0.02em]`}
            >
              <p className="tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm mb-3">
                FLOWER GIRLS
              </p>

              <div className="flex justify-center gap-6 md:gap-24 whitespace-nowrap">
                <p>Olivia Simone Aranda</p>
                <p>Winona Joe Paracale</p>
              </div>
              <br></br>
            </div>
            <div className="flex justify-center mt-2 md:mt-4">
              <img
                src="/flower.png"
                alt="Attire Guide"
                className="w-[210px] sm:w-[210px] md:w-[420px] h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* ================= DIVIDER ================= */}
        <div className="flex justify-center mt-1 mb-2">
          <div className="w-64 md:w-128 h-[2px] bg-black" />
        </div>

        {/* ================= DETAILS ================= */}
        <section id="details" className="py-16 md:py-24 px-4 md:px-6 fade-in">
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center mx-auto">
              <h2
                className={`${seasons.className} text-2xl sm:text-3xl md:text-5xl tracking-[0.25em] mb-10 md:mb-12`}
              >
                DETAILS
              </h2>
              <h3
                className={`${seasons.className} text-xl sm:text-2xl md:text-4xl mb-4`}
              >
                ATTIRE GUIDE
              </h3>
            </div>

            {/* ================= ATTIRE ================= */}
            <div className="flex flex-col items-center gap-6 md:gap-10">
              <div className="text-center px-2 sm:px-4 md:px-0">
                <p
                  className={`${seasons.className} text-sm sm:text-base md:text-3xl leading-relaxed font-semibold`}
                >
                  STRICTLY ALL BLACK
                  <br />
                  PLAIN OR PRINTED
                </p>
                {/* IMAGE FIRST */}
                <div className="w-full max-w-lg md:max-w-2xl">
                  <div className="h-52 sm:h-64 md:h-[420px] overflow-hidden rounded-sm">
                    <img
                      src="/attire.png"
                      alt="Attire Guide"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p
                  className={`${seasons.className} text-sm sm:text-base md:text-3xl leading-relaxed font-semibold`}
                >
                  GUEST: SEMI
                  <span className={`${playfair.className}`}>-</span>
                  FORMAL
                </p>
                <p
                  className={`${seasons.className} text-sm sm:text-base md:text-3xl leading-relaxed font-semibold`}
                >
                  MEN • COAT IS OPTIONAL
                </p>

                <p
                  className={`${seasons.className} text-sm sm:text-base md:text-3xl leading-relaxed font-semibold`}
                >
                  WOMEN • MIDI, OR LONG DRESS
                </p>
              </div>
            </div>

            {/* ================= DIRECTIONS ================= */}
            <div className="space-y-10">
              <h3
                className={`${playfair.className} text-xl sm:text-2xl md:text-4xl text-center`}
              >
                DIRECTIONS
              </h3>

              {/* ROW 1 — CALENDAR */}
              <div className="flex justify-center mb-10 md:mb-18">
                <WeddingCalendar />
              </div>

              {/* ROW 2 — CEREMONY + RECEPTION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                {/* CEREMONY */}
                <div className="text-center md:text-left px-2 sm:px-4 md:px-0">
                  <h4
                    className={`${seasons.className} font-bold  text-lg sm:text-xl md:text-3xl mb-2`}
                  >
                    CEREMONY
                  </h4>
                  <p
                    className={`${seasons.className} text-xs sm:text-sm md:text-2xl leading-relaxed`}
                  >
                    {venueName}
                    <br />
                    {venueAddress}
                  </p>
                  <br></br>
                  <br></br>

                  <div className="h-32 sm:h-40 md:h-48 border border-[#d6c29a]/30">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(
                        venueName + " " + venueAddress,
                      )}&z=15&output=embed`}
                    />
                  </div>
                </div>

                {/* RECEPTION */}
                <div className="text-center md:text-left px-2 sm:px-4 md:px-0">
                  <h4
                    className={`${seasons.className} font-bold text-lg sm:text-xl md:text-3xl mb-2`}
                  >
                    RECEPTION
                  </h4>

                  <p
                    className={`${seasons.className} text-xs sm:text-sm md:text-2xl leading-relaxed`}
                  >
                    Asribali Countryside Garden
                    <br />
                    138 Coastal Rd. Ext., Longos, Zapote 5, Bacoor, Cavite{" "}
                  </p>
                  <br></br>
                  <br></br>

                  <div className="h-32 sm:h-40 md:h-48 border border-[#d6c29a]/30 overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15452.571519215036!2d120.95619139001303!3d14.476483792989788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cdcc43b0f837%3A0x6d7a47c0be1184f7!2sAsribali%20Countryside%20Garden!5e0!3m2!1sen!2sph!4v1775114633748!5m2!1sen!2sph"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ================= FAQS ================= */}
            <div>
              <h3
                className={`${playfair.className} text-xl sm:text-2xl md:text-4xl text-center mb-6 md:mb-10`}
              >
                FAQs
              </h3>

              <div className="grid grid-cols-2 gap-6 md:gap-20 text-xs sm:text-sm md:text-2xl leading-relaxed">
                {/* COLUMN 1 */}
                <div className={`${seasons.className} space-y-4 md:space-y-6`}>
                  <div>
                    <h4
                      className={`${seasons.className} font-bold  text-lg sm:text-xl md:text-3xl mb-2`}
                    >
                      NOTES FOR YOUR LITTLE ONES
                    </h4>
                    <p>
                      While we absolutely love your little ones, we have decided
                      to reserve our special day for adults only. Your support
                      and understanding is greatly appreciated.
                    </p>
                  </div>
                </div>

                {/* COLUMN 2 */}
                <div className={`${seasons.className} space-y-4 md:space-y-6`}>
                  <div>
                    <h4
                      className={`${seasons.className} font-bold  text-lg sm:text-xl md:text-3xl mb-2`}
                    >
                      GIFTS
                    </h4>
                    <p>
                      With all that we have, we have been truly blessed. Your
                      presence and prayers are all that we request, but if you
                      desire to give nonetheless, a monetary gift is one we
                      suggest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= DIVIDER ================= */}
        <div className="flex justify-center my-2 md:my-2">
          <div className="w-64 md:w-128 h-[2px] bg-black" />
        </div>

        {/* ================= RSVP ================= */}
        <section
          id="rsvp"
          className="py-16 md:py-24 px-4 md:px-6  text-center fade-in"
        >
          <div className="max-w-xl mx-auto space-y-6">
            <h2
              className={`${seasons.className} text-2xl sm:text-3xl md:text-5xl tracking-[0.25em] mb-10 md:mb-12`}
            >
              RSVP
            </h2>

            {/* NEW TEXT */}
            <p
              className={`${seasons.className} text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed`}
            >
              PLEASE SCAN THE CODE OR CLICK THE LINK BELOW TO RSVP ON OR BEFORE{" "}
              <span className="font-bold">MAY 20, 2026.</span>
            </p>

            {/* QR */}
            <img
              src="/RSVPqr.png"
              alt="RSVP QR Code"
              className="w-64 h-64 md:w-64 md:h-64 mx-auto object-contain border border-black"
            />

            {/* BUTTON */}
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLScuPATkqr89mw_ntWKwWt3KaTWV-voyEg17fpyDLCCRupqQcg/viewform",
                  "_blank",
                )
              }
              className="
    px-10 md:px-14 py-4 md:py-5
    text-sm md:text-base tracking-[0.3em]
    rounded-lg
    border border-[#d6c29a]
    bg-[#f7efe0]
    text-[#5a4a2f]

    shadow-[0_8px_20px_rgba(0,0,0,0.1)]
    transition-all duration-300

    hover:bg-[#e8d8b5]
    hover:border-[#cbb184]
    hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]
    hover:-translate-y-[3px]
  "
            >
              CLICK HERE TO RSVP
            </button>
          </div>
        </section>
      </motion.main>
      {/* NAVBAR */}
    </main>
  );
}
