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
      
          <br />
      
        </h3>
      
      </div>
    
    </div>
  );
}