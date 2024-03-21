import {ProjectList} from "@/app/components/project-list";

export default function MyLinks() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
            <div className="max-w-screen-sm mx-auto text-lg flex flex-col gap-6 py-24">
                <h2 className="text-2xl text-gray-100 mb-4">My links:</h2>
                <ProjectList/>
            </div>
        </div>
    );
}