// src/app/page.tsx (HOME)
export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0a2342]/45" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 text-[#444343]">
          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl">
            Discipline. Precision.
            <br />
            Excellence in Every Project.
          </h2>
          <p className="mt-6 text-lg max-w-2xl text-blue-900">
  Run by Ex-Servicemen – Trusted for Timely Completion
</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded transition"
              href="/services"
            >
              Explore Services
            </a>
            <a
              className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-3 px-6 rounded transition"
              href="/contact"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-[#0a2342]">ABOUT US</h3>
            <p className="mt-4 text-gray-700 text-lg">
              Hummer Enterprises Pvt. Ltd. is a multi-domain service provider specializing in government supplies, turnkey project execution, and media-event management.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Placeholder for team image */}
            <img
              src="/team-placeholder.png"
              alt="Team"
              className="rounded shadow-lg w-64 md:w-80"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h3 className="text-3xl font-bold text-[#0a2342]">OUR SERVICES</h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded shadow text-center hover:shadow-lg transition">
              <img src="/icons/government.svg" className="mx-auto mb-4 w-12 h-12" alt="Government Supplies" />
              <h4 className="font-semibold text-gray-800">GOVERNMENT SUPPLIES</h4>
            </div>
            <div className="bg-white p-6 rounded shadow text-center hover:shadow-lg transition">
              <img src="/icons/building.svg" className="mx-auto mb-4 w-12 h-12" alt="Turnkey Projects" />
              <h4 className="font-semibold text-gray-800">TURNKEY PROJECTS</h4>
            </div>
            <div className="bg-white p-6 rounded shadow text-center hover:shadow-lg transition">
              <img src="/icons/event.svg" className="mx-auto mb-4 w-12 h-12" alt="Media & Event Management" />
              <h4 className="font-semibold text-gray-800">MEDIA & EVENT MANAGEMENT</h4>
            </div>
            <div className="bg-white p-6 rounded shadow text-center hover:shadow-lg transition">
              <img src="/icons/security.svg" className="mx-auto mb-4 w-12 h-12" alt="Hummer Security Services" />
              <h4 className="font-semibold text-gray-800">HUMMER SECURITY SERVICES</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-[#0a2342]">WHY CHOOSE US</h3>
          <p className="mt-4 text-gray-700 text-lg">
            To deliver projects with precision, reliability, and commitment to deadlines.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
