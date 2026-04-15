import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <footer className={`${cormorant.className} bg-white border-t border-gray-200 py-10 text-center text-gray-700`}>
      
      {/* Address, Phone, Email */}
      <div className="flex justify-center items-center gap-4 text-sm flex-wrap mb-6">
        <a
          href="https://maps.google.com/?q=1515+Liona+St+Suite+200+Honolulu+HI+96814"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#b5a642] transition-colors"
        >
          1515 Liona St. Suite 200, Honolulu, HI 96814
        </a>
        <span className="text-gray-400">|</span>
        <a href="tel:+18083124374" className="underline hover:text-[#b5a642] transition-colors">
          (808) 312-4374
        </a>
        <span className="text-gray-400">|</span>
        <a href="mailto:keeaumokuhairstudio@gmail.com" className="underline hover:text-[#b5a642] transition-colors">
          keeaumokuhairstudio@gmail.com
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 mb-6">

        {/* Instagram */}
        <a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#b5a642] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4.5"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
        </a>

        {/* Yelp */}
        <a href="https://yelp.com/biz/YOUR_BUSINESS" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#b5a642] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.14 13.53l-1.84.67c-.47.17-.7.7-.5 1.16l2.05 5.01c.2.49.78.67 1.22.38l.03-.02c.44-.29.56-.88.28-1.33l-1.24-4.87zM10.5 11.9l-1.97-.3c-.5-.08-.97.28-1.01.79l-.41 5.4c-.04.52.37.94.88.9l.04-.01c.51-.04.88-.5.82-1.01l.65-5.77zM13.5 11.5l1.6-1.22c.4-.31.44-.88.09-1.24l-3.8-3.9c-.36-.37-.97-.3-1.24.14l-.02.03c-.27.44-.13 1.01.32 1.27l3.05 4.92zM15.5 13.2l1.97.3c.5.08.88-.34.84-.84l-.41-5.4c-.04-.5-.5-.84-1-.72l-.04.01c-.5.12-.8.62-.66 1.11l-.7 5.54zM11.86 14.9l-.3 1.97c-.08.5.28.97.79 1.01l5.4.41c.52.04.94-.37.9-.88l-.01-.04c-.04-.51-.5-.88-1.01-.82l-5.77-.65z"/>
          </svg>
        </a>

        {/* Email */}
        <a href="mailto:keeaumokuhairstudio@gmail.com"
          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#b5a642] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
          </svg>
        </a>

      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} S Kim LLC. All rights reserved. · Website Designed by{" "}
        <a href="#" className="underline hover:text-[#b5a642] transition-colors">
          YourFriendlyKimchee
        </a>
      </p>

    </footer>
  );
}