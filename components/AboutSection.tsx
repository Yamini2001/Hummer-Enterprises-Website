import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#0a2342] mb-10">
            ABOUT US
          </h2>

          <p className="text-gray-800 text-lg leading-relaxed max-w-xl">
            Hummer Enterprises Pvt. Ltd. is a multi-domain service provider
            specializing in government supplies, turnkey project execution,
            and media & event management.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="absolute flex justify-center md:justify-end">
          <Image
            src="/people.png"
            alt="Professional Team"
            width={480}
            height={600}
            priority
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
