export default function Booking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue text-white font-sans">
      <main className="px-6 py-10 md:py-16 max-w-3xl mx-auto space-y-10">
        <section className="rounded-2xl shadow-xl border border-gray-800 bg-gray-900 bg-opacity-50 backdrop-blur-lg p-8">
          <h2 className="text-4xl font-extrabold mb-8 text-center tracking-wide">
            Book Your Appointment
          </h2>

          {/* Booking form */}
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className="w-full rounded-md border border-gray-700 bg-gray-800 bg-opacity-70 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                className="w-full rounded-md border border-gray-700 bg-gray-800 bg-opacity-70 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold" htmlFor="date">
                Preferred Date
              </label>
              <input
                id="date"
                type="date"
                className="w-full rounded-md border border-gray-700 bg-gray-800 bg-opacity-70 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-400 hover:bg-blue-500 transition-colors duration-300 rounded-md py-3 font-bold text-blue-400"
            >
              Book Appointment
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
