"use client";

import { Playfair_Display, EB_Garamond, Allura } from "next/font/google";

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
        bg-[#f4efe7]
        border border-[#d6c29a]/40
        rounded-t-[120px] rounded-b-[20px]
        px-6 py-8 md:px-8 md:py-10
        shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        max-w-[260px] mx-auto
      "
    >
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
          <button onClick={() => scrollToSection("story")}>STORY</button>
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
        className="relative flex flex-col items-center justify-center text-center px-4 md:px-6 py-20 md:min-h-screen"
      >
        <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#e8d8b5]/70"></div>

        <div className="relative z-10 space-y-5 max-w-4xl">
          <p
            className={`${garamond.className} tracking-[0.25em] md:tracking-[0.3em] text-xs md:text-sm`}
          >
            THE WEDDING OF
          </p>

          <h1
            className={`${playfair.className} text-3xl sm:text-5xl md:text-7xl leading-tight`}
          >
            Marielle <span className="text-[#8c7a5a] italic">&</span> Gabriel
          </h1>

          <div className="w-full max-w-xl md:max-w-2xl mx-auto bg-white p-2 shadow-xl md:shadow-2xl rotate-0 md:rotate-1 hover:rotate-0 transition duration-700">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/GTTsVaOA_AY"
              />
            </div>
          </div>

          <p className={`${playfair.className} italic text-sm md:text-lg mt-4`}>
            "We loved with a love that was more than love."
          </p>
        </div>
      </section>

      {/* ================= ENTOURAGE ================= */}
      <section
        id="entourage"
        className="py-16 md:py-24 px-4 md:px-6 bg-[#f3f3f3] text-center"
      >
        {/* Principal Sponsors */}
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
          <h2 className={`${playfair.className} text-2xl md:text-4xl`}>
            PRINCIPAL SPONSORS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-sm">
            <div className={`${garamond.className}`}>
              <p>Jose Labrador S. Oblefias</p>
              <p>Darwin E. Garcia</p>
              <p>Leo P. Mascarinas</p>
              <p>George E. I. La Salle</p>
              <p>Engr. Fernando I. Balbanero</p>
              <p>Ronnie Javier</p>
              <p>Erwin Nethercott</p>
              <p>Tito Rafael</p>
            </div>

            <div className={`${garamond.className}`}>
              <p>Nariza G. Oblefias</p>
              <p>Grace P. Cruzada</p>
              <p>Delia S. Garcia</p>
              <p>Amelia F. Espiritu</p>
              <p>Noraida E. Nethercott</p>
              <p>Marilyn L.</p>
              <p>Marietta Cheng</p>
              <p>Dra. Michele H. Fajardo</p>
              <p>Dra. Noravi Delgado</p>
            </div>
          </div>

          {/* Other Roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-sm mt-12">
            <div className={`${garamond.className}`}>
              <p className="tracking-[0.2em] mb-3">BEST MEN</p>
              <p>Mark Adrian I. Pabalan</p>
              <p>Erickson I. Pabalan</p>

              <p className="tracking-[0.2em] mb-3 mt-6">GROOMSMEN</p>

              <p>Jeffrey O. Millado</p>
              <p>John Mark R. Gonzales</p>
              <p>Jermelle G. Fresnoza</p>
              <p>Jeffrey Francis Arma</p>
              <p>King Philip I. Pabalan</p>

              <p className="tracking-[0.2em] mb-3 mt-6">BRIDESMAIDS</p>
              <p>Jessercene Camille P. Gonzales</p>
              <p>Vanessa Rose V. Fresnoza</p>
              <p>Ma. Roxanne I. Arma</p>
              <p>Arianne C. Que</p>
            </div>

            <div className={`${garamond.className}`}>
              <p className="tracking-[0.2em] mb-3 mt-6">MAID OF HONOR</p>
              <p>Maryll Camille L. Cantillo</p>

              <p className="tracking-[0.2em] mb-3 mt-6">MATRON OF HONOR</p>
              <p>Michelle P. Delos Reyes</p>
            </div>
          </div>
        </div>

        {/* Secondary Sponsors */}
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-10 mt-12">
          <h2 className={`${playfair.className} text-2xl md:text-4xl`}>
            SECONDARY SPONSORS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-sm">
            <div className={`${garamond.className}`}>
              <p className="tracking-[0.2em] mb-3">VEIL</p>
              <p>Simon Aranda</p>
              <p>Crystal P. Aranda</p>
            </div>

            <div className={`${garamond.className}`}>
              <p className="tracking-[0.2em] mb-3">CANDLE</p>
              <p>Erickson Jean A. Pabalan</p>
              <p>Danica Paz S. Garcia</p>
            </div>

            <div className={`${garamond.className}`}>
              <p className="tracking-[0.2em] mb-3">CORD</p>
              <p>Daryll James M. Garcia</p>
              <p>Angelique M. Caballo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section
        id="details"
        className="py-16 md:py-24 px-4 md:px-6 bg-[#f7efe0]"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <WeddingCalendar />

          <div className="text-center md:text-left">
            <h3 className={`${playfair.className} text-xl md:text-2xl mb-3`}>
              Venue
            </h3>

            <p className={`${garamond.className} mb-4 text-sm md:text-base`}>
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
        </div>
      </section>

      {/* ================= RSVP ================= */}
      <section
        id="rsvp"
        className="py-16 md:py-24 px-4 md:px-6 bg-[#e8d8b5] text-center"
      >
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className={`${playfair.className} text-2xl md:text-4xl`}>RSVP</h2>

          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-black/80 flex items-center justify-center text-white">
            QR
          </div>

          <button className="px-6 md:px-10 py-2 md:py-3 text-xs md:text-sm tracking-[0.25em] border border-[#8c7a5a] bg-white hover:bg-[#f7efe0] transition">
            CONFIRM ATTENDANCE
          </button>
        </div>
      </section>
    </main>
  );
}
