import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center h-screen bg-gradient-to-tl from-green-900 to-green-400 text-black">
      <div className="column-container">
        <h1 className="text-left text-4xl font-bold text-white py-8">
          <span className="text-cyan-400">K</span>
          <span className="text-purple-400">W</span>
          <span className="text-yellow-400">A</span>
          <span className="text-red-400">L</span>
        </h1>

        <div className="text-column">
         
          <h2>Anyways I am learning how to make a website</h2>
          <h3 className="text-3xl bg-gradient-to-tr from-cyan-950 to-green-800">What is it that I am doing here</h3>
          <ul>
            <li>🚀 Next.js</li>
            <li>🚀 Typescript</li>
            <li>🚀 TailwindCSS</li>
            <li>🚀 Vercel</li>
          </ul>
        </div>
      

      <div>
        <Link href="/" className="text-blue-300 hover:text-blue-100"> Home </Link>
        <Link href="/projects" className="text-blue-300 hover:text-blue-100"> Projects </Link>
      </div>
    </div>
    </div>
  );
}
