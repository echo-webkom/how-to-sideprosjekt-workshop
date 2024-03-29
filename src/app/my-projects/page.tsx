import { ProjectList } from "@/app/components/project-list";
import { Navigation } from "@/app/components/navigation";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-screen-sm mx-auto text-lg flex flex-col gap-6 py-24">
        <Navigation />
        <h2 className="text-2xl text-gray-100 mb-4">Mine prosjekter</h2>
        <ProjectList />
      </div>
    </div>
  );
}
