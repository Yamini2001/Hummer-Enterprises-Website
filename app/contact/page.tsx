export default function ContactPage() {
  return (
    <section className="py-25 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#000080] mb-12 text-center">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <div className="space-y-5 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-[#000080]">
              Corporate Office
            </h2>

            <p className="text-[#757171] leading-relaxed">
              No. 243 L/P Saiyadul Ajyab,<br />
              South West Delhi,<br />
              New Delhi, Delhi – 110030,<br />
              India
            </p>

            <p className="text-[#757171]">
              <strong>Phone:</strong> +91 XXXXXXXXXX
            </p>

            <p className="text-[#757171] break-all">
              <strong>Email:</strong> contacthummerenterprises@gmail.com
            </p>

            {/* Social Links (Text / SVG based) */}
           <div className="flex gap-4 mt-6">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-500 transition"
          >
            <svg
              className="w-5 h-5 fill-text-[#757171]"
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
              className="w-5 h-5 fill-text-[#757171]"
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
              className="w-5 h-5 fill-text-[#757171]"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.6v1.7h.05a4 4 0 0 1 3.6-2c3.85 0 4.55 2.5 4.55 5.8V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9z" />
            </svg>
          </a>
            </div>
          </div>

          {/* Inquiry Form */}
          <form className="grid gap-4 w-full max-w-md mx-auto md:mx-0">

            <input
              type="text"
              placeholder="Name"
              required
              className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <select
              required
              className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Inquiry Type</option>
              <option value="project">Project</option>
              <option value="supply">Supply Order</option>
            </select>

            <textarea
              placeholder="Message"
              rows={5}
              required
              className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="submit"
              className="bg-orange-500 text-[#413e3e] py-3 rounded hover:bg-orange-600 transition w-full font-semibold"
            >
              Submit Inquiry
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}
