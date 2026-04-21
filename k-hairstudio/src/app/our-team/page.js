import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const team = [
  {
    name: "Sandra Kim",
    title: "Owner",
    image: "/team/sandra.webp",
    instagram: "https://instagram.com/THEIR_HANDLE",
  },
  {
    name: "Sarah",
    title: "Assistant",
    image: "/team/sarah.webp",
    instagram: "https://instagram.com/THEIR_HANDLE",
  },
  {
    name: "Rebecca",
    title: "Assistant",
    image: "/team/rebecca.webp",
    instagram: "https://instagram.com/THEIR_HANDLE",
  },
  {
    name: "Richard",
    title: "Front Desk",
    image: "/team/richard.jpeg",
    instagram: "https://instagram.com/THEIR_HANDLE",
  }, 
  {
    name: "Mele",
    title: "Mascot",
    image: "/team/mele.jpeg",
    instagram: "https://instagram.com/THEIR_HANDLE",
  },
];

export default function OurTeam() {
  return (
    <section className={`${cormorant.className} py-20 px-6 bg-white`}>

      {/* Heading */}
      <h1 className="text-center text-5xl font-light tracking-widest uppercase mb-16">
        Our Team
      </h1>

      {/* Team Grid */}
      <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
        {team.map((member) => (

          <a
            key={member.name}
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            {/* Circle Image */}
            <div className="w-56 h-56 rounded-full overflow-hidden mb-5 shadow-md transition-transform duration-300 group-hover:scale-105">
              <Image
                src={member.image}
                alt={member.name}
                width={224}
                height={224}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Name */}
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-800">
              {member.name}
            </p>

            {/* Title */}
            <p className="text-sm text-gray-500 mt-1">
              {member.title}
            </p>

          </a>
        ))}
      </div>

    </section>
  );
}