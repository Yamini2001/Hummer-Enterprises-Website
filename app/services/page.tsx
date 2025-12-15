import Link from "next/link";
import {
  ClipboardDocumentListIcon,
  BuildingOfficeIcon,
  SpeakerWaveIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <section className="py-28 bg-grey-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Heading */}
        <h3 className="text-3xl font-bold text-[#000080] mb-4">
          Our Services
        </h3>
        <p className="text-[#808080] max-w-3xl mb-10">
          We deliver integrated solutions across government supplies, turnkey
          project execution, media & event management, and professional security
          services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Government Supplies */}
          <div className="border rounded-xl p-8 text-center hover:shadow-lg transition">
            <ClipboardDocumentListIcon className="h-14 w-14 mx-auto mb-4 text-[#A9A9A9]" />
            <h4 className="font-semibold text-[#000080] mb-2">
              Government Supplies
            </h4>
            <p className="text-sm text-[#808080]">
              General supply orders for Central & State Government departments.
              Registered GeM seller.
            </p>
          </div>

          {/* Turnkey Projects */}
          <div className="border rounded-xl p-8 text-center hover:shadow-lg transition">
            <BuildingOfficeIcon className="h-14 w-14 mx-auto mb-4 text-[#A9A9A9]" />
            <h4 className="font-semibold text-[#000080] mb-2">
              Turnkey Projects
            </h4>
            <p className="text-sm text-[#808080]">
              IT infrastructure, civil construction, and integrated execution
              from planning to delivery.
            </p>
          </div>

          {/* Media & Event Management */}
          <div className="border rounded-xl p-8 text-center hover:shadow-lg transition">
            <SpeakerWaveIcon className="h-14 w-14 mx-auto mb-4 text-[#A9A9A9]" />
            <h4 className="font-semibold text-[#000080] mb-2">
              Media & Event Management
            </h4>
            <p className="text-sm text-[#808080]">
              Government functions, corporate events, exhibitions, and official
              ceremonies.
            </p>
          </div>

          {/* Hummer Security Services */}
          <Link
            href="/security"
            className="border rounded-xl p-8 text-center hover:shadow-lg transition block"
          >
            <ShieldCheckIcon className="h-14 w-14 mx-auto mb-4 text-[#A9A9A9]" />
            <h4 className="font-semibold text-[#000080] mb-2">
              Hummer Security Services
            </h4>
            <p className="text-sm text-[#808080]">
              Professional security solutions led by ex-servicemen.
            </p>
          </Link>

        </div>
      </div>
    </section>
  );
}
