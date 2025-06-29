
export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white p-10 text-black">
      <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold">Project {item}</h2>
            <p className="text-sm text-gray-600">Short description of project {item}.</p>
          </div>
        ))}
      </div>
    </main>
  )
}
