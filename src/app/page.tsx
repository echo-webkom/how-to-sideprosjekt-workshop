
import { Http2ServerRequest } from 'http2';
import Link from 'next/link'



export default function Home() {
  return (
    <div className="full-screen">

      <div className="text-center column-container">

        <h1 className="text-2xl font-bold py-8">Hi, my name is Kai 👋</h1>

        <h2 className="text-xl py-8">

          I am a Computer Science student in Bergen, Norway <br></br><br></br>
          Welcome to my Portfolio Website! Take a look at the source code {" "}
          <a href="https://github.com/KWaloen/My-Portolio-Website" target="_blank" rel="noopener noreferrer" className="link">here.</a>
          <br></br>

          Also take a look at my {" "}
          <a href="https://github.com/KWaloen" target="_blank" rel="noopener noreferrer" className="link">GitHub </a>
          page!
          <br></br><br></br>
          This site is under constant construction! I am learning as I go! <br></br>
          I am self taught in JavaScript and this page is created using React, Tailwind CSS, and hosted by Vercel.
        </h2>

        <h2 className="text-xl font-bold">React Projects</h2>

        <h2>
          <li>
          <Link className="link" href="/ToDoList">✔️ Todo list</Link>!
          </li>
        </h2>

        <h2 className="text-xl font-bold py-8">
          Java Projects <br></br>
          ----- BugShooter -----

        </h2>

        <iframe
          className="mx-auto"
          width="500"
          height="400"
          src="https://www.youtube.com/embed/456Mii_hQ90"
          title="BugShooter - a student game made in Java"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <h3 className="text-xl py-8">

          I am proud to introduce my first original game, BugShooter ☝! This is a game written in Java using Swing in a period of 4 weeks as part of the Inf101 coursework. <br></br><br></br>
          Growing up, I played a lot of Flash games on Newgrounds.com and my favorite were top down zombie shooters, so I challenged myself to make one. Making this game was a fun, educational, and stressful experience that took a lot of banging my head on the problem but things turned out quite nicely. One day, it occurred to me that instead of a zombie shooter, a bug shooter game would be more appropriate to reflect my experience in making this game.
          <br></br><br></br>

          For further information, check out the BugShooter {" "}
          <a href="https://github.com/KWaloen/BugShooter" target="_blank" rel="noopener noreferrer" className="link">repository </a>
          on my GitHub!
        </h3>

        <h3 className="text-2xl font-bold py-8">

          ----- Rodent Reboot -----

        </h3>

        <iframe
          className="mx-auto"
          width="500"
          height="400"
          src="https://www.youtube.com/embed/Q8Xg16uNTP0"
          title="Rodent Reboot"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <h3 className="text-xl py-8">

          I present to you, Rodent Reboot ☝!
          <br></br><br></br>
          This is a game written in Java using LibGDX using Agile techniques as part of Inf112 coursework.
          A blog written as a group can be found {" "}
          <a href="https://jpiversen.github.io/inf112_group_project/" target="_blank" rel="noopener noreferrer" className="link">here! </a>  <br></br><br></br>



          My role in this project was lead tester and developer. As a tester, my responsibilities were to ensure that we complied with minimum coverage (75%) and to carry out manual testing, otherwords play the game a lot!
          As a developer, my main responsibilities were code review and writing code. My biggest contribution was the implementation of the item system in which I used a Strategy Design Pattern to randomly spawn powerup items and carry out specific powerup effects that the player interacted with at designated item spawn points on the map.

          <br></br><br></br>
          For further information, check out the Rodent Reboot {" "}
          <a href="https://github.com/KWaloen/Rodent-Reboot" target="_blank" rel="noopener noreferrer" className="link">repository </a>
          on my GitHub!
        </h3>

      </div>

    </div>
  );
}