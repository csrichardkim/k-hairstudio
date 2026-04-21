import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function ContactUs() {
  return (
    <main className={`${cormorant.className} min-h-screen bg-white`}>

      {/* Hero Banner */}
      <div className="relative w-full h-64 bg-gray-900 flex items-center justify-center">
        <h1 className="text-white text-5xl font-light tracking-widest uppercase">
          Contact Us
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Left - Contact Form */}{/* Left - Booking Info */}
<div>
  <h2 className="text-3xl font-light tracking-wide mb-2">Book an Appointment</h2>
  <p className="text-gray-500 text-sm mb-8">
  </p>

  <div className="flex flex-col gap-6 text-gray-700">

    <div>
      <h3 className="text-xs tracking-widest uppercase text-gray-400 mb-2">Phone</h3>
      <p className="text-sm mb-2">Give us a call to schedule your appointment.</p>
      <a
        href="tel:+18083124374"
        className="text-xl underline hover:text-[#b5a642] transition-colors"
      >
        (808) 312-4374
      </a>
    </div>

    <div className="border-t border-gray-100 pt-6">
      <h3 className="text-xs tracking-widest uppercase text-gray-400 mb-2">Walk-Ins</h3>
      <p className="text-sm text-gray-700">
        Walk-ins are welcome! Stop by during our business hours and we&apos;ll do our best to accommodate you.
      </p>
    </div>

  </div>
</div>

        {/* Right - Info */}
        <div className="flex flex-col gap-10">

          {/* Visit */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-gray-400 mb-3">Visit Us</h3>
            <a
              href="https://maps.google.com/?q=1515+Liona+St+Suite+200+Honolulu+HI+96814"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 underline hover:text-[#b5a642] transition-colors leading-relaxed"
            >
              1515 Liona St. Suite 200<br />
              Honolulu, Hawaii 96814
            </a>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-gray-400 mb-3">Hours</h3>
            <div className="flex flex-col gap-1 text-gray-700">
              <div className="flex justify-between max-w-xs">
                <span>Monday - Friday</span>
                <span>10am - 7pm</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span>Sunday</span>
                <span>10am - 5pm</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span>Saturday</span>
                <span className="text-gray-400">Closed</span>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-gray-400 mb-3">Phone</h3>
            <a
              href="tel:+18083124374"
              className="text-gray-700 underline hover:text-[#b5a642] transition-colors"
            >
              (808) 312-4374
            </a>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-gray-400 mb-3">Email</h3>
            <a
              href="mailto:keeaumokuhairstudio@gmail.com"
              className="text-gray-700 underline hover:text-[#b5a642] transition-colors"
            >
              keeaumokuhairstudio@gmail.com
            </a>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-gray-400 mb-3">Follow Us</h3>
            <a
              href="https://instagram.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-[#b5a642] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
          </div>
          

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
        </div>
      </div>

    </main>
  );
}