// ===============================
// src/app/projects/page.tsx
// ===============================

export default function Projects() {
  return (
    <section className="py-25 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold text-[#000080]">
            Projects Showcase
          </h1>
          <p className="mt-4 text-[#757171] text-lg text-justify">
            A snapshot of key projects executed across IT infrastructure,
            construction, and event management for government and enterprise
            clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* IT Solutions */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#000080] mb-4">
              IT Solutions
            </h3>
            <ul className="space-y-3 text-[#757171] text-justify">
              <li>• Data center setup & infrastructure support</li>
              <li>• Secure networking solutions</li>
              <li>• Enterprise system integration</li>
              <li>• IT solutions for government departments</li>
            </ul>
          </div>

          {/* Construction */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#000080] mb-4">
              Construction
            </h3>
            <ul className="space-y-3 text-[#757171] text-justify">
              <li>• Office complexes & administrative buildings</li>
              <li>• Institutional infrastructure projects</li>
              <li>• Turnkey civil construction execution</li>
              <li>• Compliance-driven project delivery</li>
            </ul>
          </div>

          {/* Events */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#000080] mb-4">
              Events
            </h3>
            <ul className="space-y-3 text-[#757171] text-justify">
              <li>• Government summits & official functions</li>
              <li>• Corporate product launches</li>
              <li>• Exhibitions & conferences</li>
              <li>• Cultural and public engagement programs</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
