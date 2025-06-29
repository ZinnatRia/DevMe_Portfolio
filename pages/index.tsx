
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevelopMe - Portfolio</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-[#e0f7fa] via-white to-lime-300 p-10 text-black">
        <header className="flex justify-between items-center mb-16">
          <h1 className="text-2xl font-bold">DEVLOP.ME</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="/portfolio" className="hover:underline">Portfolio</a>
            <a href="#" className="hover:underline">Blog</a>
          </nav>
          <button className="border-2 px-4 py-1 rounded-full flex items-center gap-2">
            <span>Start Project</span> <span>↗</span>
          </button>
        </header>

        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black leading-tight">
            Trusted <span className="bg-black text-white px-2">Partner</span> for <br />
            Your Website <span className="bg-black text-white px-2">Develop.</span>
          </h2>
          <p className="mt-6 text-lg max-w-xl mx-auto">
            Building the world’s best marketing websites for over a decade.<br/>
            Your trusted partner for strategy, design, and dev.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="border rounded-full px-6 py-2 flex items-center gap-2">
              📞 Schedule a Call
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
