import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center h-screen bg-gradient-to-tl from-green-900 to-green-400 text-black">
      <div className="column-container">
        <h1 className="text-center text-2xl">
          <span className="text-black">Hi, my name is Kai 👋</span>
          
        </h1>

        <h2 className="text-center text-2xl font-bold text-white py-8">
        <span className="text-black">I am a Computer Science student in Bergen, Norway</span>

        </h2>

        <h3 className="text-center text-xl font-bold text-white py-8">
          <span className="text-black">Stay tuned, this site is under construction!</span>
          </h3>
          
        <div className="text-column">
          
          <h4>
      
          In the meantime, scroll down to take a look at what I have worked on so far!

          </h4>
        
        </div>
      

      <div>
            <h5>Here are some projects that I have worked on:<br></br></h5>
            
            <iframe className = "mx-auto" width="500" height="400" src="https://www.youtube.com/embed/456Mii_hQ90" title="BugShooter - a student game made in Java" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <p className = "text-center">Bugshooter - Semesteroppgave Inf101</p>
        
      </div>
    </div>
    </div>
  );
}
