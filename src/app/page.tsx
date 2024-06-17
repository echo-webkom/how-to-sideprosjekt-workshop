import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center h-screen bg-gradient-to-tl from-green-900 to-green-400 text-black">
      <div className="column-container">
        <h1 className="text-center text-3xl font-bold py-8">
          Hi, my name is Kai 👋
          
        </h1>

        <h2 className="text-center text-2xl font-bold py-8">
        I am a Computer Science student in Bergen, Norway

        </h2>

        <h3 className="text-center text-xl font-bold py-8">
          Stay tuned, this site is under construction! <br></br>
          In the meantime, scroll down to take a look at what I have worked on so far! 
          <br></br>

          </h3>
          
      

      <div className = "video-container">
            
            <iframe className = "responsive-iframe" 
              src="https://www.youtube.com/embed/456Mii_hQ90" 
              title="BugShooter - a student game made in Java" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
            
            <p className = "text-center font-bold">Bugshooter - Semesteroppgave Inf101 april 2023</p>

            
        
      </div>
    </div>
    </div>
  );
}
