import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Services() {
  return (
    <section className={`${cormorant.className} p-8`}>

        {/* Hero Banner */}
      <div className="relative w-full h-64 bg-gray-900 flex items-center justify-center">
        <h1 className="text-white text-5xl font-light tracking-widest uppercase">
          Services
        </h1>
      </div>

      <Image
        src="/khairmenu.jpg"
        alt="Hair Services Menu"
        width={1200}
        height={800}
        className="w-full object-cover"
        priority
      />

      <div className={`${cormorant.className} flex justify-center`}>
        <Link
          href="/contact-us"
          className="mt-8 inline-block text-center border border-gray-800 text-gray-800 px-8 py-3 text-sm tracking-widest uppercase hover:bg-gray-800 hover:text-white transition-colors"
        >
          Book Now
        </Link>
      </div>

    </section>
  );
}