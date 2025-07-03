export default function Gallery() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-wide relative inline-block">
          Our Gym Gallery
          <span className="block w-24 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="relative group overflow-hidden rounded-xl shadow-xl bg-gray-800 bg-opacity-60 backdrop-blur-md hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-700 hover:border-blue-500"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center justify-center h-60 text-xl font-semibold text-blue-400">
                Image {num}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
