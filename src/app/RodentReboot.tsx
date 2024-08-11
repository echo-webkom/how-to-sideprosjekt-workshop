
export default function RodentReboot() {
    return (
        <div className="text">

            <div className="card">
                <h2 className="text-xl font-bold py-4">

                    ----- Rodent Reboot -----

                </h2>
                <p>⚠️ Warning: the music can be a bit loud, volume check! ⚠️</p>
                <iframe
                    className="mx-auto"
                    src="https://www.youtube.com/embed/Q8Xg16uNTP0"
                    title="Rodent Reboot"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>

                <p className="text-xl py-8">                
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
                </p>
            </div>
        </div>
    );
}