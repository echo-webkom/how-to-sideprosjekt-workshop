import Footer from "../../Footer"
import Banner from "../../Banner"
import NavBar from "@/app/NavBar"

export default function BugShooter() {
  return (

    <div className="page">

      <div className="card">

      <NavBar />

      <Banner message = "🐜 BugShooter 🐜"/>  

      <div>
        <iframe
          className="iframe"
          src="https://www.youtube.com/embed/456Mii_hQ90"
          title="BugShooter - a student game made in Java"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <br/>
        <p className="text">

          I am proud to introduce my first original game, BugShooter ☝! This is a game written in Java using Swing in a period of 4 weeks as part of the Inf101 coursework. <br></br><br></br>
          Growing up, I played a lot of Flash games on Newgrounds.com and my favorite were top down zombie shooters, so I challenged myself to make one. Making this game was a fun, educational, and stressful experience that took a lot of banging my head on the problem but things turned out quite nicely. One day, it occurred to me that instead of a zombie shooter, a bug shooter game would be more appropriate to reflect my experience in making this game.
          <br></br><br></br>

          For further information, check out the BugShooter {" "}
          <a href="https://github.com/KWaloen/BugShooter" target="_blank" rel="noopener noreferrer" className="link">repository </a>
          on my GitHub!
        </p>

        
      </div>

    <Footer />
    </div>
  )
}