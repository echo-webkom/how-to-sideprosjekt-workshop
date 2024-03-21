import {ProjectList} from "@/app/components/project-list";

export default function Home() {
  return (
      <div className="from-inherit --tw-gradient-from: inherit var(--tw-gradient-from-position);">
        <Header />
          <div className="text-center">
              <br/>
              <br/>
                <ProjectList/>
                <br/>
                <p>Made by Trym, aka bomulls øye joe</p>
          </div>
      </div>
  );

    function Header() {
        return (
            <div>
                <h1 className="text-4xl">Velkommen, hva vil du se?</h1>
            </div>
        );
    }
}