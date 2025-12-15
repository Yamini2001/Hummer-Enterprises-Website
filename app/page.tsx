// src/app/page.tsx (HOME)
import Image from "next/image";
import Link from "next/link";
import {
  ClipboardDocumentListIcon,
  BuildingOfficeIcon,
  SpeakerWaveIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import {
  BuildingOffice2Icon,
  ShoppingBagIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-[80vh] md:h-[95vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        {/* Light overlay */}
  <div className="absolute inset-0 bg-white/35"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 navy-text">
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight text-[#093c6f]">
            Discipline. Precision.
            <br />
            Excellence in Every Project.
          </h2>
          <p className="mt-6 text-base md:text-lg max-w-2xl text-[#093c6f]">
            Run by Ex-Servicemen – Trusted for Timely Completion
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto text-center bg-orange-600 hover:bg-orange-700 text-[#444343] font-semibold py-3 px-6 rounded transition"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#444343] font-semibold py-3 px-6 rounded transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-200 relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative">
          {/* Left Content */}
          <div className="space-y-6 z-20">
            <h3 className="text-4xl font-bold text-[#000080]">ABOUT US</h3>
            <p className="text-[#808080] text-lg leading-relaxed max-w-xl text-justify">
              Hummer Enterprises Pvt. Ltd. is a multi-domain service provider
              specializing in government supplies, turnkey project execution,
              and media & event management. Our team, led by ex-servicemen, is
              committed to discipline, precision, and excellence in every
              project we undertake.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative md:absolute md:right-0 md:-mt-[100px] w-full md:w-[350px] lg:w-[350px] z-30 flex justify-end mt-6 md:mt-0">
            <Image
              src="/people.png"
              alt="Professional Team"
              width={550}
              height={680}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h3 className="text-4xl font-bold text-[#000080] mb-10">
            OUR SERVICES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-gray-300 rounded-lg text-center transition hover:shadow-lg space-y-3 cursor-pointer">
              <ClipboardDocumentListIcon className="h-10 w-10 mx-auto text-[#A9A9A9]" />
              <h4 className="font-semibold text-[#808080] text-sm md:text-base">
                GOVERNMENT SUPPLIES
              </h4>
            </div>
            <div className="bg-white p-6 border border-gray-300 rounded-lg text-center transition hover:shadow-lg space-y-3 cursor-pointer">
              <BuildingOfficeIcon className="h-10 w-10 mx-auto text-[#A9A9A9]" />
              <h4 className="font-semibold text-[#808080] text-sm md:text-base">
                TURNKEY PROJECTS
              </h4>
            </div>
            <div className="bg-white p-6 border border-gray-300 rounded-lg text-center transition hover:shadow-lg space-y-3 cursor-pointer">
              <SpeakerWaveIcon className="h-10 w-10 mx-auto text-[#A9A9A9]" />
              <h4 className="font-semibold text-[#808080] text-sm md:text-base">
                MEDIA & EVENT MANAGEMENT
              </h4>
            </div>
           <Link
  href="/security"
  className="bg-white p-6 border border-gray-300 rounded-lg text-center transition hover:shadow-lg space-y-3 cursor-pointer block"
>
  <ShieldCheckIcon className="h-10 w-10 mx-auto text-[#A9A9A9]" />
  <h4 className="font-semibold text-[#808080] text-sm md:text-base">
    HUMMER SECURITY SERVICES
  </h4>
</Link>
          </div>
        </div>
      </section>

       {/* Why Choose Us Section */}
<section className="py-16 md:py-20 bg-[#0a2342]">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
      
      {/* Left Content */}
      <div className="text-[#808080] max-w-xl text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose Us
        </h3>
        <p className="text-[#808080]/80 text-base md:text-lg">
          To deliver projects with precision, reliability, and commitment to deadlines.
        </p>

        <a
          href="/contact"
          className="inline-block mt-6 bg-orange-600 hover:bg-orange-700 text-[#4f4d4d] font-semibold py-3 px-6 rounded transition"
        >
          Contact Us
        </a>
      </div>

      {/* Right Cards */}
      <div className="flex flex-wrap justify-center md:justify-end gap-4">
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-36 sm:w-40">
          <img
            src="/itsolutions.jpg"
            alt="Solutions"
            className="w-full h-24 sm:h-28 object-cover"
          />
          <p className="text-sm font-semibold text-center py-2 text-[#808080]">
            IT Solutions
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-36 sm:w-40">
          <img
            src="/events.jpg"
            alt="Events"
            className="w-full h-24 sm:h-28 object-cover"
          />
          <p className="text-sm font-semibold text-center py-2 text-[#808080]">
            Events
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Projects Showcase */}
      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    
    <h3 className="text-3xl font-bold text-[#000080]">
      PROJECTS SNAPSHOT
    </h3>
    <p className="mt-4 text-[#808080] text-lg max-w-3xl">
      Snapshot of key projects across IT, Construction, and Event Management
      demonstrating our execution capability.
    </p>

    {/* Snapshot Grid */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* IT Projects */}
      <article className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
        <img
          src="/it.jpg"
          alt="IT Solutions Project"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h4 className="text-xl font-semibold text-[#000080]">
            IT Solutions
          </h4>
          <p className="mt-2 text-[#808080]">
            Secure networking, data centers, and enterprise IT systems delivered
            for government and corporate clients.
          </p>
        </div>
      </article>

      {/* Construction Projects */}
      <article className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
        <img
          src="/construction.jpg"
          alt="Construction Project"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h4 className="text-xl font-semibold text-[#000080]">
            Construction
          </h4>
          <p className="mt-2 text-[#808080]">
            Turnkey construction of institutional buildings and office complexes
            executed to specification.
          </p>
        </div>
      </article>

      {/* Event Projects */}
      <article className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
        <img
          src="/eventmanagement.jpg"
          alt="Event Management Project"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h4 className="text-xl font-semibold text-[#000080]">
            Events
          </h4>
          <p className="mt-2 text-[#808080]">
            Large-scale government summits, exhibitions, and corporate events
            managed end-to-end.
          </p>
        </div>
      </article>

    </div>


  </div>
</section>


      {/* Clients & Partners */}
   <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 md:px-8">

    <h3 className="text-3xl font-bold text-[#000080]">
      Clients & Partners
    </h3>
    <p className="mt-4 text-[#808080] text-lg max-w-3xl">
      We work closely with government bodies, GeM procurement partners,
      and corporate institutions across India.
    </p>

    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Government */}
      <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col">
        <BuildingOffice2Icon className="h-12 w-12 mx-auto text-[#A9A9A9]" />
        <h4 className="mt-4 text-xl font-semibold text-[#000080]">
          Government Clients
        </h4>
        <p className="mt-2 text-[#808080] text-sm flex-grow">
          Central & State Government departments and public sector units.
        </p>
        <a
          href="/clients/government"
          className="mt-4 inline-block bg-orange-600 hover:bg-orange-700 text-[#444343] text-sm font-semibold py-2 px-4 rounded transition"
        >
          Learn More
        </a>
      </div>

      {/* GeM */}
      <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col">
        <ShoppingBagIcon className="h-12 w-12 mx-auto text-[#A9A9A9]" />
        <h4 className="mt-4 text-xl font-semibold text-[#000080]">
          GeM Partners
        </h4>
        <p className="mt-2 text-gray-600 text-sm flex-grow">
          Registered and active seller on Government e-Marketplace (GeM).
        </p>
        <a
          href="/clients/gem"
          className="mt-4 inline-block bg-orange-600 hover:bg-orange-700 text-[#444343] text-sm font-semibold py-2 px-4 rounded transition"
        >
          Learn More
        </a>
      </div>

      {/* Corporate */}
      <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col">
        <BriefcaseIcon className="h-12 w-12 mx-auto text-[#A9A9A9]" />
        <h4 className="mt-4 text-xl font-semibold text-[#000080]">
          Corporate Clients
        </h4>
        <p className="mt-2 text-[#808080] text-sm flex-grow">
          Private sector, enterprises, and institutional clients.
        </p>
        <a
          href="/clients/corporate"
          className="mt-4 inline-block bg-orange-600 hover:bg-orange-700 text-[#444343] text-sm font-semibold py-2 px-4 rounded transition"
        >
          Learn More
        </a>
      </div>

    </div>
  </div>
</section>



      {/* Contact Us Section */}
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8">

    <h3 className="text-3xl font-bold text-[#000080] mb-10 text-center">
      Contact Us
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* Contact Info */}
      <div className="space-y-5">
        <h4 className="text-2xl font-semibold text-[#000080]">
          Corporate Office
        </h4>

        <p className="text-[#A9A9A9] leading-relaxed">
          No 243 L/P Saiyadul Ajyab,
          <br />
          South West Delhi,
          <br />
          New Delhi, Delhi, India – 110030
        </p>

        <p className="text-[#A9A9A9]">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:contacthummerenterprises@gmail.com"
            className="text-orange-600 hover:underline"
          >
            contacthummerenterprises@gmail.com
          </a>
        </p>

        {/* Social Links (SVG Icons) */}
        <div className="flex gap-4 mt-6">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-500 transition"
          >
            <svg
              className="w-5 h-5 fill-text-[#444343]"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2V9.8c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-500 transition"
          >
            <svg
              className="w-5 h-5 fill-text-[#444343]"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.15 4.9a4.28 4.28 0 0 0 1.33 5.7 4.2 4.2 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.44 4.19 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.7 8.7 0 0 0 22.46 6z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-500 transition"
          >
            <svg
              className="w-5 h-5 fill-text-[#444343]"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.6v1.7h.05a4 4 0 0 1 3.6-2c3.85 0 4.55 2.5 4.55 5.8V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Inquiry Form */}
      <form className="grid gap-4 bg-gray-50 p-6 rounded-xl shadow-sm">
        <input
          placeholder="Name"
          className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          placeholder="Email"
          type="email"
          className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <select className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500">
          <option>Inquiry Type</option>
          <option>Project</option>
          <option>Supply Order</option>
        </select>
        <textarea
          placeholder="Message"
          rows={5}
          className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="bg-orange-500 text-[#666363] py-3 rounded hover:bg-orange-600 transition font-semibold"
        >
          Submit Inquiry
        </button>
      </form>

    </div>
  </div>
</section>
    </main>
  );
}
