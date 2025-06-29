
// import Head from 'next/head'

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>DevelopMe - Portfolio</title>
//       </Head>
//       <main className="min-h-screen bg-gradient-to-r from-[#e0f7fa] via-white to-lime-300 p-10 text-black">
//         <header className="flex justify-between items-center mb-16">
//           <h1 className="text-2xl font-bold">DEVLOP.ME</h1>
//           <nav className="space-x-6">
//             <a href="#" className="hover:underline">Home</a>
//             <a href="#" className="hover:underline">About</a>
//             <a href="/portfolio" className="hover:underline">Portfolio</a>
//             <a href="#" className="hover:underline">Blog</a>
//           </nav>
//           <button className="border-2 px-4 py-1 rounded-full flex items-center gap-2">
//             <span>Start Project</span> <span>↗</span>
//           </button>
//         </header>

//         <section className="max-w-4xl mx-auto text-center">
//           <h2 className="text-5xl font-black leading-tight">
//             Trusted <span className="bg-black text-white px-2">Partner</span> for <br />
//             Your Website <span className="bg-black text-white px-2">Develop.</span>
//           </h2>
//           <p className="mt-6 text-lg max-w-xl mx-auto">
//             Building the world’s best marketing websites for over a decade.<br/>
//             Your trusted partner for strategy, design, and dev.
//           </p>
//           <div className="mt-10 flex justify-center">
//             <button className="border rounded-full px-6 py-2 flex items-center gap-2">
//               📞 Schedule a Call
//             </button>
//           </div>
//         </section>
//       </main>
//     </>
//   )
// }
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevelopMe - Portfolio</title>
      </Head>

      <main
        className="min-h-screen bg-cover bg-center text-black px-4 py-10 sm:p-10"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        {/* Header */}
        <header className="flex justify-between items-center mb-16 bg-white/60 backdrop-blur-md px-6 py-4 rounded-xl shadow-md transition-all duration-300">
          <h1 className="text-2xl font-black tracking-tight">DEVLOP.ME</h1>

          <nav className="hidden md:flex space-x-8 text-lg font-medium">
            <Link
              href="/"
              className="relative hover:text-gray-800 transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-black after:transition-all"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="relative hover:text-gray-800 transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-black after:transition-all"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="relative hover:text-gray-800 transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-black after:transition-all"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="relative hover:text-gray-800 transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-black after:transition-all"
            >
              Blog
            </Link>
          </nav>

          <button className="border-2 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-black hover:text-white transition duration-300 ease-in-out">
            <span>Start Project</span>
            <span>↗</span>
          </button>
        </header>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Trusted{' '}
            <span className="bg-black text-white px-3 py-1 rounded-md inline-block transition-all duration-300">
              Partner
            </span>{' '}
            for <br />
            Your Website{' '}
            <span className="bg-black text-white px-3 py-1 rounded-md inline-block transition-all duration-300">
              Develop.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-medium text-gray-900 max-w-2xl mx-auto">
            Building the world’s best marketing websites for over a decade.
            <br />
            Your trusted partner for strategy, design, and dev.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="border-2 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition font-medium text-lg duration-300 shadow-md hover:scale-105">
              📞 Schedule a Call
            </button>
          </div>
        </section>
      </main>

      {/* Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
      `}</style>
    </>
  )
}
