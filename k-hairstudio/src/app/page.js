"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function Home() {
  const [current, setCurrent] = useState(0);
  const images = ["/hero1.webp", "/hero2.webp"];

  const goToNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 8000);
    return () => clearInterval(timer);
  }, [goToNext, current]); // current in deps resets timer on any slide change

  return (
    <main>

      {/* Hero Section */}
      <div
        className="relative w-full h-screen overflow-hidden"
        onClick={goToNext}
      >

        {/* Background Images */}
        {images.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className={`${cormorant.className} relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6`}>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl mb-6 flex items-baseline gap-3">
            <span className="font-semibold tracking-widest text-5xl md:text-7xl"> KE&apos;EAUMOKU HAIR STUDIO</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-base md:text-lg font-light leading-relaxed text-gray-200">
            Our space is designed to welcome every generation — from kids getting their first haircut
            to parents and grandparents enjoying a moment of confidence. We believe great style starts
            with genuine connection, and we&apos;re here to help your whole family look and feel their best together.
          </p>

          {/* Dots */}
          <div className="flex gap-3 mt-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation(); // prevent triggering the parent onClick
                  goToSlide(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Map Section */}
      <section className={`${cormorant.className} flex flex-col md:flex-row min-h-[500px]`}>

        {/* Google Map */}
        <div className="w-full md:w-2/3 h-[400px] md:h-auto">
          <iframe
            src="https://maps.google.com/maps?q=1515+Liona+St+Suite+200+Honolulu+HI+96814&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-1/3 flex flex-col justify-center px-10 py-12 bg-white">

          <h2 className="text-2xl font-semibold mb-2">Visit Us</h2>

          {/* Address */}
          <a
            href="https://maps.google.com/?q=1515+Liona+St+Suite+200+Honolulu+HI+96814"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gray-700 hover:text-[#b5a642] transition-colors mt-4 leading-relaxed"
          >
            1515 Liona St. Suite 200<br />
            Honolulu, Hawaii 96814
          </a>

          {/* Hours */}
          <div className="mt-6">
            <p className="font-semibold underline mb-1">Hours</p>
            <p className="text-gray-700">Monday - Friday: 10am - 7pm</p>
            <p className="text-gray-700">Sunday: 10am - 5pm</p>
            <p className="text-gray-700">Saturday: Closed</p>
          </div>

          {/* Phone */}
          <div className="mt-6">
            <p className="font-semibold underline mb-1">Phone</p>
            
            <a
              href="tel:+18083124374"
              className="underline text-gray-700 hover:text-[#b5a642] transition-colors"
            >
              (808) 312-4374
            </a>
          </div>

          {/* Book Now */}
          <Link
            href="/contact-us"
            className="mt-8 inline-block text-center border border-gray-800 text-gray-800 px-8 py-3 text-sm tracking-widest uppercase hover:bg-gray-800 hover:text-white transition-colors"
          >
            Book Now
          </Link>

        </div>
      </section>

    </main>
  );
}