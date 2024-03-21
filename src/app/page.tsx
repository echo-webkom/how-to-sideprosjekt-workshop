import {ProjectList} from "@/app/components/project-list";

export default function Home() {
  return (
      <div className="bg-gradient-to-r from-indigo-500 from-15% via-sky-400 via-60% to-emerald-500 to-25%">
        <Header />
          <div className="flex-grow text-center">
                <ProjectList />
          </div>
          <Footer />
      </div>
  );

    function Header() {
        return (
            <div>
                <h1 className="text-4xl flex-grow text-center">Velkommen</h1>
            </div>
        );
    }

    function Footer() {
        return (
            <div className="bg-gray-100">
                <p className="text-center p-4">Made by Trym, as a hobby project</p>
            </div>
        );
    }

}