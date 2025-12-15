// ===============================
// src/app/security/page.tsx
// ===============================

import Link from "next/link";

export default function Security() {
  return (
    <section className="py-25 bg-grey-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-[#000080]">
            Hummer Security Services
          </h1>
          <p className="mt-4 text-[#757171] text-lg text-justify">
            Hummer Security Services delivers professional, end-to-end security
            solutions led by ex-servicemen and trained security professionals.
            We combine operational discipline with modern surveillance and
            access control systems to safeguard people, premises, and assets.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#000080] mb-2">
              Manpower Deployment
            </h3>
            <p className="text-[#757171] text-justify">
              Deployment of ex-servicemen and professionally trained security
              personnel for industrial, commercial, and residential premises.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#000080] mb-2">
              Access Control & Gate Management
            </h3>
            <p className="text-[#757171] text-justify">
              Visitor management, gate control, perimeter monitoring, and
              regulated access systems to ensure controlled entry and exit.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#000080] mb-2">
              CCTV & PTZ Camera Installation
            </h3>
            <p className="text-[#757171] text-justify">
              Design and installation of CCTV and PTZ camera systems for
              continuous surveillance of offices, campuses, and facilities.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#000080] mb-2">
              Complete Premises Security Cover
            </h3>
            <p className="text-[#757171] text-justify">
              Integrated security solutions covering manpower, monitoring,
              access control, and emergency response protocols.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#000080] mb-2">
              CCTV Analytics & Monitoring Tie-ups
            </h3>
            <p className="text-[#757171] text-justify">
              Partnerships with multiple firms for advanced CCTV analytics,
              remote monitoring, and intelligent threat detection.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#000080] mb-2">
              Event Security & VIP Protection
            </h3>
            <p className="text-[#757171] text-justify">
              Security planning and execution for government events, corporate
              functions, exhibitions, and VIP movements.
            </p>
          </div>

          <div className="border rounded-xl p-6 md:col-span-2">
            <h3 className="text-xl font-semibold text-[#000080] mb-2">
              Risk Assessment & Security Consultancy
            </h3>
            <p className="text-[#757171] text-justify">
              Comprehensive site risk assessment, vulnerability analysis, and
              professional security consultancy for optimized protection
              strategies.
            </p>
          </div>

        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact?service=security"
            className="bg-orange-600 hover:bg-orange-700 text-grey font-semibold py-3 px-6 rounded text-center transition"
          >
            Request Security Services
          </Link>

          <Link
            href="/contact?service=cctv"
            className="bg-orange-600 hover:bg-orange-700 text-grey font-semibold py-3 px-6 rounded text-center transition"
          >
            Book CCTV Installation
          </Link>
        </div>

      </div>
    </section>
  );
}
