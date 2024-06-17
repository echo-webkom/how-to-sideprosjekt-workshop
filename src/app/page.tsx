import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center h-screen bg-gradient-to-tl from-green-900 to-green-400 text-black">
      <div className="column-container">
        <h1 className="text-center text-2xl font-bold text-white py-8">
          <span className="text-black">Hi, my name is Kai</span>
          
        </h1>

        <h2 className="text-center text-2xl font-bold text-white py-8">
        <span className="text-black">I am a Computer Science student in Bergen, Norway</span>

        </h2>

        <h3 className="text-center text-2xl font-bold text-white py-8">
          <span className="text-black">I am learning to make a website using React</span>
        </h3>

        <div className="text-column">
          
          <h2>Stay tuned, this site is under construction!</h2>
      
          In the meantime, click on the Projects tab to take a look at what I have worked on so far!
        </div>
      

      <div>
        <Link href="/" className="text-blue-300 hover:text-blue-100"> Home </Link>
        <Link href="/projects" className="text-blue-300 hover:text-blue-100"> Projects </Link>
      </div>
    </div>
    </div>
  );
}
