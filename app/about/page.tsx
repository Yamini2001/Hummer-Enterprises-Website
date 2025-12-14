import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-gray-100 py-22">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-bold text-[#000080] mb-6">
            About Us
          </h1>

          <h2 className="text-xl font-semibold text-[#000080] mb-2">
            Company Profile
          </h2>
          <p className="text-[#808080] text-lg leading-relaxed text-justify mb-5">
            Hummer Enterprises Pvt. Ltd. is a multi-domain service provider
            specialising in government supplies, turnkey project execution,
            and media-event management. We operate across multiple sectors,
            delivering integrated solutions tailored to the requirements of
            government departments and enterprise clients.
          </p>

          <h2 className="text-xl font-semibold text-[#000080] mb-2">
            Our Unique Identity
          </h2>
          <p className="text-[#808080] text-lg leading-relaxed text-justify mb-5">
            Founded and operated by retired personnel from the Armed Forces and
            Central Armed Police Forces (CAPFs), Hummer Enterprises brings
            military-grade discipline, integrity, and time management into the
            corporate and project execution environment. Our leadership ensures
            structured planning, strict compliance, and operational excellence.
          </p>

          <h2 className="text-xl font-semibold text-[#000080] mb-2">
            Our Mission
          </h2>
          <p className="text-[#808080] text-lg leading-relaxed text-justify mb-5">
            To deliver projects and supplies with precision, reliability, and
            an uncompromising commitment to quality and timelines.
          </p>

          <h2 className="text-xl font-semibold text-[#000080] mb-2">
            Our Vision
          </h2>
          <p className="text-[#808080] text-lg leading-relaxed text-justify">
            To become the most trusted and dependable partner for government
            departments and enterprises across IT infrastructure,
            construction, and event management.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/people.png"   // replace with professional team image if available
            alt="Professional Team"
            width={480}
            height={520}
            className="rounded-xl shadow-lg object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
