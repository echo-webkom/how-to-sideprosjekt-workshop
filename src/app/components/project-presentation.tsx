import {Project} from "next/dist/build/swc";

interface ProjectPresentation {
    projectName: string;
}

export function Present({projectName}: ProjectPresentation) {
    return <h3 className="">Dette prosjektet heter {projectName}!</h3>
}