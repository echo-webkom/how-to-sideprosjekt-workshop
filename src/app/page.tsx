import Link from "next/link"

export default function Home() {
  return (
    <div className="full-screen">

      <div className="text-center column-container">
      
        <h1 className="text-3xl font-bold py-8">Hi, my name is Kai 👋</h1>
      
        <h2 className="text-2xl font-bold py-8">
      
          I am a Computer Science student in Bergen, Norway <br></br>
          Take a look at my {" "}
          <a href = "https://github.com/KWaloen" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
      
        </h2>
      
        <h3 className="text-xl font-bold py-8">
      
          Stay tuned, this site is under construction! <br />
          In the meantime, scroll down to take a look at what I have worked on
          so far!
      
          <br />
      
        </h3>
      
        <div className="video-container">

          <div className = "iframe-wrapper">
      
          <iframe
            className="responsive-iframe"
            src="https://www.youtube.com/embed/456Mii_hQ90"
            title="BugShooter - a student game made in Java"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          </div>
          <p className="video-caption">
            BugShooter - Semesteroppgave Inf101 april 2023
      
          </p>
        
        <h4 className="text-xl font-bold py-8">
          GitHub Repo for BugShooter is available here: eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

        </h4>
      
        </div>
      
      </div>
    
    </div>
  );
}