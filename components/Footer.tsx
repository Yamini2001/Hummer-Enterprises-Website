// ===============================
// src/components/Footer.tsx
// ===============================
export default function Footer() {
  return (
    <footer className="bg-[#0B1C2D] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        <h3 className="text-lg font-semibold text-grey tracking-wide">
          HUMMER ENTERPRISES PVT. LTD.
        </h3>

        <p className="mt-2 text-sm">
          Run by Ex-Servicemen • Trusted • Disciplined • Reliable
        </p>

        <div className="mt-6 border-t border-white/10 pt-4 text-xs text-gray-400">
          © {new Date().getFullYear()} Hummer Enterprises Pvt. Ltd. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
