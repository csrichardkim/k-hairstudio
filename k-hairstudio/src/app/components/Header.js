import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">MyBrand</h1>
      <nav className="flex gap-6">
        <Link href="/" className="hover:text-black-600">Home</Link>
        <Link href="/services" className="hover:text-blue-600">Services</Link>
        <Link href="/our-team" className="hover:text-blue-600">Our Team</Link>
        <Link href="/contact-us" className="hover:text-blue-600">Contact Us</Link>
      </nav>
    </header>
  );
}