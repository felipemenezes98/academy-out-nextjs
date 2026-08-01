import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1549375812-2ab575f006f2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560167809-95f43eeaad88?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1570306296747-f7bb428e4fe0?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function Gallery() {
  return (
    <section className="gallery">

      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="Motocicleta Custom"
          width={700}
          height={500}
        />
      ))}

    </section>
  );
}
