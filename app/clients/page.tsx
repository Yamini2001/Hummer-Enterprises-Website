// ===============================
// src/app/clients/page.tsx
// ===============================

export default function Clients() {
  return (
    <section className="py-25 bg-grey-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold text-[#000080]">
            Clients & Partners
          </h1>
          <p className="mt-4 text-[#757171] text-lg text-justify">
            We collaborate with a wide spectrum of government bodies, GeM
            procurement partners, and corporate institutions across India,
            delivering reliable and compliant solutions.
          </p>
        </div>

        {/* Client Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Government */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#000080] mb-4">
              Government Departments
            </h3>
            <p className="text-[#757171] text-justify mb-4">
              Serving Central and State Government departments, public sector
              units, and statutory bodies through compliant procurement and
              timely execution.
            </p>
            <ul className="list-disc list-inside text-[#757171] space-y-2">
              <li>Central Government Departments</li>
              <li>State Government Agencies</li>
              <li>Public Sector Undertakings (PSUs)</li>
            </ul>
          </div>

          {/* GeM */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#000080] mb-4">
              GeM Procurement Ecosystem
            </h3>
            <p className="text-[#757171] text-justify mb-4">
              Registered and active seller on the Government e-Marketplace
              (GeM), supporting transparent and efficient government
              procurement.
            </p>
            <ul className="list-disc list-inside text-[#757171] space-y-2">
              <li>GeM Registered Procurement</li>
              <li>Product & Service Listings</li>
              <li>Order Fulfillment & Compliance</li>
            </ul>
          </div>

          {/* Corporate */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#000080] mb-4">
              Corporate & Institutional Clients
            </h3>
            <p className="text-[#757171] text-justify mb-4">
              Partnering with private enterprises and institutions for IT,
              infrastructure, events, and integrated project execution.
            </p>
            <ul className="list-disc list-inside text-[#757171] space-y-2">
              <li>Private Enterprises</li>
              <li>Educational Institutions</li>
              <li>Corporate Offices & Campuses</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
