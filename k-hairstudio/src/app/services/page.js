import Image from "next/image";

export default function Services() {
    return (
        
    <section className="p-8">
        <Image
        src="/khairmenu.jpg"
        alt="Hair Services Menu"
        width={1200}
        height={800}
        className="w-full object-cover"
        priority
      />
    </section>
  );

}