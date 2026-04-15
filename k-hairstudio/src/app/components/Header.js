"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-team", label: "Our Team" },
  { href: "/contact-us", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={`${cormorant.className} bg-[#f0eeeb] py-4 px-8 flex items-center justify-between border-b border-gray-200`}>

      {/* Logo placeholder */}
      <Link href="/">
        <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white cursor-pointer">
          <span className="text-xs">Logo</span>
        </div>
      </Link>

      {/* Nav */}
      <nav className="flex items-center gap-8">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm font-semibold tracking-widest uppercase transition-colors hover:text-[#b5a642] ${
              pathname === href ? "text-[#b5a642]" : "text-gray-700"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Instagram */}
      <a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#b5a642] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4.5"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </a>

    </header>
  );
}