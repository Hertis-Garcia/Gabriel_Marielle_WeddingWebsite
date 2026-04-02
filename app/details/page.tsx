"use client";

import { Playfair_Display, EB_Garamond, Allura } from "next/font/google";
import { cormorant } from "../page";
import { seasons } from "../page";

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
        rounded-t-[120px] rounded-b-[20px]
        px-6 py-8 md:px-8 md:py-10
        max-w-[260px] mx-auto

        /* OUTER DEPTH (stronger elevation) */
        shadow-[0_20px_60px_rgba(0,0,0,0.12),0_8px_20px_rgba(0,0,0,0.08)]

        /* SOFT GLOW BORDER (champagne highlight) */
        before:absolute before:inset-0 before:rounded-t-[120px] before:rounded-b-[20px]
        before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4),inset_0_0_25px_rgba(214,194,154,0.25)]
        before:pointer-events-none

        /* EDGE LIGHTING (top highlight for realism) */
        after:absolute after:top-0 after:left-0 after:w-full after:h-1/2
        after:bg-gradient-to-b after:from-white/30 after:to-transparent
        after:rounded-t-[120px]
        after:pointer-events-none
      "
    >
      <div
        className="
    absolute top-5 left-5
    text-[#c9a96a]
    opacity-80
  "
      ></div>
      {/* MONTH */}
      <div className="text-center mb-6">
        <h3
          className={`${playfair.className} text-xl md:text-2xl text-[#2f2a26]`}
        >
          June
        </h3>
        <p
          className={`${allura.className} text-sm md:text-base text-[#bfa46f]`}
        >
          2026
        </p>
      </div>

      {/* WEEK DAYS */}
      <div className="grid grid-cols-7 text-center mb-3">
        {weekDays.map((d) => (
          <span key={d} className="text-[10px] tracking-[0.2em] text-[#b0a79c]">
            {d}
          </span>
        ))}
      </div>

      {/* DAYS */}
      <div className="grid grid-cols-7 gap-y-3 text-center">
        {days.map((day, i) => (
          <div key={i} className="flex justify-center items-center h-8">
            {day === 20 ? (
              <div className="w-8 h-8 flex items-center justify-center bg-[#c9a96a] text-white rounded-full text-sm shadow-md">
                {day}
              </div>
            ) : (
              <span className={`${garamond.className} text-sm text-[#4a453f]`}>
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

  return (
    <main className="text-[#2f2a26]">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-center py-4 md:py-6 z-50 backdrop-blur-sm bg-black/20 overflow-x-auto">
        <div className="flex gap-6 md:gap-10 text-[10px] md:text-sm tracking-[0.25em] md:tracking-[0.3em] text-white whitespace-nowrap px-4">
          <button onClick={() => scrollToSection("story")}>
            SAVE THE DATE
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
        className="relative flex flex-col items-center text-center px-4 md:px-6 py-20"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#e8d8b5]/70"></div>

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

          {/* 🎬 LARGE VIDEO (breaks out of text width) */}
          <div className="w-full max-w-none mt-10 px-2 md:px-12">
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
            <p className={`${seasons.className} text-base md:text-lg`}>
              REQUEST THE HONOR OF YOUR PRESENCE
              <br />
              AS WE UNITE IN THE SACRAMENT OF HOLY MATRIMONY
            </p>

            <p className={`${seasons.className} text-base md:text-lg`}>
              SATURDAY, THE TWENTIETH OF JUNE
              <br />
              TWO THOUSAND AND TWENTY SIX
              <br />
              AT TWO O’CLOCK IN THE AFTERNOON
            </p>

            <p className={`${seasons.className} text-base md:text-lg`}>
              ST. MICHAEL THE ARCHANGEL PARISH
              <br />
              GEN. EVANGELISTA STREET, POBLACION, BACOOR, CAVITE
            </p>

            <p className={`${seasons.className} text-base md:text-lg`}>
              RECEPTION TO FOLLOW IMMEDIATELY AT THE
              <br />
              ASRIBALI COUNTRYSIDE GARDEN, BACOOR CAVITE
            </p>
          </div>
        </div>
      </section>

      {/* ================= ENTOURAGE ================= */}
      <section
        id="entourage"
        className="
    py-16 md:py-24 px-4 md:px-6 text-center
    bg-[url('/whitetexture2.jpg')] 
    bg-cover bg-center bg-no-repeat
  "
      >
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2
            className={`${seasons.className} text-3xl md:text-5xl tracking-[0.25em] mb-12`}
          >
            ENTOURAGE
          </h2>

          {/* PRINCIPAL SPONSORS */}
          <div className="mb-12">
            <p className="tracking-[0.3em] text-xs md:text-sm mb-3">
              PRINCIPAL SPONSORS
            </p>

            <div className="grid grid-cols-2 gap-x-16 text-sm leading-relaxed">
              <div
                className={`${garamond.className} text-base md:text-3xl leading-relaxed whitespace-nowrap space-y-2`}
              >
                <p>Mr. Jose Labrador Oblefias</p>
                <p>Mr. Darwin Garcia</p>
                <p>Mr. Leo Mascarinas</p>
                <p>Mr. George La Salle</p>
                <p>Engr. Fernando Balbarino</p>
                <p>Mr. Ronnie Javier</p>
                <p>Mr. Erwin Nethercott</p>
                <p>Mr. Rafael Gallego Hortigosa</p>
              </div>

              <div
                className={`${garamond.className} text-base md:text-3xl leading-relaxed whitespace-nowrap space-y-2`}
              >
                <p>Mrs. Nariza Oblefias</p>
                <p>Mrs. Delia Garcia</p>
                <p>Dra. Michele Fajardo</p>
                <p>Dra. Noravi Delgado</p>
                <p>Mrs. Grace Cruzada</p>
                <p>Mrs. Amelia Espiritu</p>
                <p>Mrs. Noraida Nethercott</p>
                <p>Mrs. Marilyn Hortigosa</p>
                <p>Mrs. Marietta Cheng</p>
              </div>
            </div>
          </div>

          {/* BEST MEN / MAID OF HONOR */}
          <div className="grid grid-cols-2 gap-x-16 text-sm mb-10">
            <div
              className={`${garamond.className} text-base md:text-3xl leading-relaxed whitespace-nowrap space-y-2`}
            >
              <p className="tracking-[0.3em] text-xs md:text-sm mb-3">
                BEST MEN
              </p>
              <p>Mr. Mark Adrian Pabalan</p>
              <p>Mr. Erickson Pabalan</p>
            </div>

            <div
              className={`${garamond.className} text-base md:text-3xl leading-relaxed whitespace-nowrap space-y-2`}
            >
              <p className="tracking-[0.3em] text-xs md:text-sm mb-3">
                MAID OF HONOR
              </p>
              <p>Ms. Maryll Camille Cantillo</p>

              <p className="tracking-[0.3em] text-xs md:text-sm mt-6 mb-3">
                MATRON OF HONOR
              </p>
              <p>Mrs. Michelle Delos Reyes</p>
            </div>
          </div>

          {/* GROOMSMEN / BRIDESMAIDS */}
          <div className="grid grid-cols-2 gap-x-16 text-sm mb-12">
            <div
              className={`${garamond.className} text-base md:text-3xl leading-relaxed whitespace-nowrap space-y-2`}
            >
              <p className="tracking-[0.3em] text-xs md:text-sm mb-3">
                GROOMSMEN
              </p>
              <p>Mr. Jeffrey Millado</p>
              <p>Mr. John Mark Gonzales</p>
              <p>Mr. Jermelle Fresnoza</p>
              <p>Mr. Jeffrey Francis Arma</p>
              <p>Mr. King Philip Pabalan</p>
            </div>

            <div
              className={`${garamond.className} text-base md:text-3xl leading-relaxed whitespace-nowrap space-y-2`}
            >
              <p className="tracking-[0.3em] text-xs md:text-sm mb-3">
                BRIDESMAIDS
              </p>
              <p>Mrs. Fatima Reyes</p>
              <p>Mrs. Jessercene Camille Gonzales</p>
              <p>Mrs. Vanessa Rose Fresnoza</p>
              <p>Mrs. Ma. Roxanne Arma</p>
              <p>Mrs. Arianne Que</p>
            </div>
          </div>

          {/* SECONDARY SPONSORS */}
          <div className="flex justify-center gap-12 md:gap-20 mb-10">
            <div className="w-[260px] text-center">
              <div
                className={`${garamond.className} text-base md:text-3xl whitespace-nowrap space-y-2`}
              >
                <p className="tracking-[0.3em] text-xs md:text-sm mb-3">CORD</p>
                <p>Daryll James Garcia</p>
                <p>Angelique Caballo</p>
              </div>
            </div>

            <div className="w-[260px] text-center">
              <div
                className={`${garamond.className} text-base md:text-3xl whitespace-nowrap space-y-2`}
              >
                <p className="tracking-[0.3em] text-xs md:text-sm mb-3">VEIL</p>
                <p>John Conrad Aranda</p>
                <p>Crystal Aranda</p>
              </div>
            </div>

            <div className="w-[260px] text-center">
              <div
                className={`${garamond.className} text-base md:text-3xl whitespace-nowrap space-y-2`}
              >
                <p className="tracking-[0.3em] text-xs md:text-sm mb-3">
                  CANDLE
                </p>
                <p>Erickson Jean Pabalan</p>
                <p>Danica Paz Garcia</p>
              </div>
            </div>
          </div>

          {/* BEARERS */}
          <div className="flex justify-center gap-12 md:gap-20 mb-10">
            <div className="w-[260px] text-center">
              <div
                className={`${garamond.className} text-base md:text-3xl whitespace-nowrap space-y-2`}
              >
                <p className="tracking-[0.3em] text-xs md:text-sm mb-3">
                  COIN BEARER
                </p>
                <p>Noah Grayson Reyes</p>
              </div>
            </div>

            <div className="w-[260px] text-center">
              <div
                className={`${garamond.className} text-base md:text-3xl whitespace-nowrap space-y-2`}
              >
                <p className="tracking-[0.3em] text-xs md:text-sm mb-3">
                  RING BEARER
                </p>
                <p>Kaiden Ezekiel Aranda</p>
              </div>
            </div>

            <div className="w-[260px] text-center">
              <div
                className={`${garamond.className} text-base md:text-3xl whitespace-nowrap space-y-2`}
              >
                <p className="tracking-[0.3em] text-xs md:text-sm mb-3">
                  BIBLE BEARER
                </p>
                <p>Leon Atlas Montes</p>
              </div>
            </div>
          </div>

          {/* FLOWER GIRLS */}
          <div
            className={`${garamond.className} text-base md:text-3xl leading-relaxed`}
          >
            <p className="tracking-[0.3em] text-xs md:text-sm mb-4">
              FLOWER GIRLS
            </p>

            <div className="flex justify-center gap-16 md:gap-24 whitespace-nowrap">
              <p>Olivia Simone Aranda</p>
              <p>Winona Joe Paracale</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section
        id="details"
        className="py-16 md:py-24 px-4 md:px-6 bg-[#f7efe0]"
      >
        <div className="max-w-5xl mx-auto space-y-20">
          <div className="text-center mx-auto">
            <h3 className={`${playfair.className} text-3xl md:text-5xl mb-14`}>
              DETAILS
            </h3>
            <h3 className={`${playfair.className} text-2xl md:text-4xl mb-4`}>
              Attire
            </h3>
          </div>
          {/* ================= ATTIRE ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT TEXT */}
            <div className="text-center md:text-left">
              <p
                className={`${garamond.className} text-xl md:text-3xl leading-relaxed font-semibold`}
              >
                STRICTLY ALL BLACK, plain or printed
                <br />
                <br />
                Guest: semi-formal
              </p>
            </div>

            {/* RIGHT IMAGES */}
            <div className="grid grid-cols-1 gap-4">
              <div className="h-48 md:h-64 overflow-hidden rounded-sm">
                <img
                  src="/attire.png"
                  alt="Attire Guide"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================= DIRECTIONS ================= */}
          <div className="space-y-10">
            <h3
              className={`${playfair.className} text-2xl md:text-4xl text-center`}
            >
              Directions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
              {/* LEFT: CALENDAR */}
              <div className="flex justify-center md:justify-start">
                <WeddingCalendar />
              </div>

              {/* RIGHT: LOCATIONS */}
              <div className="space-y-10">
                {/* CEREMONY */}
                <div className="text-center md:text-left">
                  <h4
                    className={`${playfair.className} text-xl md:text-2xl mb-2`}
                  >
                    Ceremony
                  </h4>

                  <p
                    className={`${garamond.className} mb-4 text-base md:text-lg leading-relaxed`}
                  >
                    {venueName}
                    <br />
                    {venueAddress}
                  </p>

                  <div className="h-40 md:h-48 border border-[#d6c29a]/30">
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
                <div className="text-center md:text-left">
                  <h4
                    className={`${playfair.className}text-xl md:text-2xl mb-2`}
                  >
                    Reception
                  </h4>

                  <p
                    className={`${garamond.className} mb-4 text-base md:text-lg leading-relaxed`}
                  >
                    Asribali Countryside Garden
                    <br />
                    138 Coastal Rd. Ext., Longos, Zapote 5, Bacoor, Cavite 4102
                    Bacoor, Philippines
                  </p>

                  <div className="h-40 md:h-48 border border-[#d6c29a]/30 overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15452.571519215036!2d120.95619139001303!3d14.476483792989788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cdcc43b0f837%3A0x6d7a47c0be1184f7!2sAsribali%20Countryside%20Garden!5e0!3m2!1sen!2sph!4v1775114633748!5m2!1sen!2sph"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FAQS ================= */}
          <div>
            <h3
              className={`${playfair.className} text-2xl md:text-3xl text-center mb-10`}
            >
              FAQs
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
              {/* COLUMN 1 */}
              <div className={`${garamond.className} space-y-6`}>
                <div>
                  <p className="font-semibold mb-1">
                    NOTES FOR YOUR LITTLE ONES{" "}
                  </p>
                  <p>
                    While we absolutely love your little ones, we have decided
                    to reserve our special day for adults only. Your support and
                    understanding is greatly appreciated.
                  </p>
                </div>
              </div>

              {/* COLUMN 2 */}
              <div className={`${garamond.className} space-y-6`}>
                <div>
                  <p
                    className={`${seasons.className}italic font-semibold mb-1`}
                  >
                    GIFTS
                  </p>
                  <p>
                    With all that we have, we have been truly blessed. Your
                    presence and prayers are all that we request, but if you
                    desire to give nonethless, a monetary gift is one we
                    suggest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RSVP ================= */}
      <section
        id="rsvp"
        className="py-16 md:py-24 px-4 md:px-6 bg-[#e8d8b5] text-center"
      >
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className={`${playfair.className} text-2xl md:text-4xl`}>RSVP</h2>

          <img
            src="/RSVPqr.png"
            alt="RSVP QR Code"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto object-contain border border-black"
          />
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScuPATkqr89mw_ntWKwWt3KaTWV-voyEg17fpyDLCCRupqQcg/viewform",
                "_blank",
              )
            }
            className="
    px-8 md:px-10 py-3
    text-xs md:text-sm tracking-[0.25em]
    rounded-md
    border border-[#d6c29a]
    bg-[#f7efe0]
    text-[#5a4a2f]

    shadow-[0_6px_15px_rgba(0,0,0,0.08)]
    transition-all duration-300

    hover:bg-[#e8d8b5]
    hover:border-[#cbb184]
    hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]
    hover:-translate-y-[2px]
  "
          >
            CLICK HERE TO RSVP
          </button>
        </div>
      </section>
    </main>
  );
}
