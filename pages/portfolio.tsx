export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
           <span className="bg-black text-white px-2 py-1 rounded-md">My Portfolio</span>
        </h1>
        <p className="text-gray-600 text-lg">
          A selection of projects showcasing my design and development skills.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-lime-200 to-blue-100 flex items-center justify-center text-4xl font-bold text-gray-700">
              📁
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold group-hover:text-black transition-colors">
                Project {item}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                A brief description of what this project is about and the key features it showcases.
              </p>
              <button className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition">
                View Project →
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
