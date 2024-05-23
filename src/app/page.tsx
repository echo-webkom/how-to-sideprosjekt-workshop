import { ProjectList } from "@/app/components/project-list";
import { Navigation } from "@/app/components/navigation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <Navigation />
      <br />
      <div className="flex-grow">
      <Header />
      </div>
      <Footer />
    </div>
  );

  function Header() {
    return (
      <div>
        <h1 className="text-4xl flex-grow text-center">Welcome</h1>
      </div>
    );
  }

  function Footer() {
    return (
      <div>
        <p className="text-center p-4">Made by Trym, as a hobby project</p>
      </div>
    );
  }
}
