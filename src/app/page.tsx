import {ProjectList} from "@/app/components/project-list";

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-light-blue-100 to-white">
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
                <h1 className="text-4xl">Velkommen</h1>
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