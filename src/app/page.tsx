import Link from "next/link"

export default function Home() {
  return (
    <div className="full-screen">

      <div className="text-center column-container">
      
        <h1 className="text-3xl font-bold py-8">Hi, my name is Kai 👋</h1>
      
        <h2 className="text-2xl py-8">
          
          I am a Computer Science student in Bergen, Norway <br></br><br></br>
          Welcome to my Portfolio Website! Take a look at the source code {" "}
          <a href = "https://github.com/KWaloen/My-Portolio-Website" target="_blank" rel="noopener noreferrer" className="link">here.</a>
          <br></br>
          
          Also take a look at my {" "}
          <a href = "https://github.com/KWaloen" target="_blank" rel="noopener noreferrer" className="link">GitHub </a>
          page! 
          <br></br><br></br>
          This site is under constant construction! I am learning as I go! <br></br>
          I am self taught in JavaScript and this page is created using React, Tailwind CSS, and hosted by Vercel. 
         
      
        </h2>

        <h3 className="text-2xl font-bold py-8"> 
          
          Project 1: BugShooter

        </h3>
      
          <iframe
            className="mx-auto"
            width="500" 
            height="400"
            src="https://www.youtube.com/embed/456Mii_hQ90"
            title="BugShooter - a student game made in Java"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
       
        <h4 className="text-xl py-8">
      
          I am proud to introduce my first original game, BugShooter ☝. This is a game written in Java using Swing in a period of 4 weeks as part of the Inf101 coursework. <br></br><br></br>
          Growing up, I played a lot of Flash games on Newgrounds.com and my favorite were top down zombie shooters, so I challenged myself to make one. Making this game was a fun, educational, and stressful experience that took a lot of banging my head on the problem but things turned out quite nicely. One day, it occurred to me that instead of a zombie shooter, a bug shooter game would be more appropriate to reflect my experience in making this game.  
          <br></br><br></br>

          For further information, check out the BugShooter {" "}
          <a href = "https://github.com/KWaloen/BugShooter" target="_blank" rel="noopener noreferrer" className="link">repository </a>
          on my GitHub!
        </h4>

        <h3 className="text-2xl font-bold py-8"> 
          
          Project 2: Rodent Reboot

        </h3>
      
      </div>
    
    </div>
  );
}