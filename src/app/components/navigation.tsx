import Link from "next/link";

export function Navigation() {
    return (
        <nav className="flex gap-4 text-center">
            <Link href="/">
                <a className="text-emerald-950 hover:text-blue-200">Hjem</a>
            </Link>
            <Link href="/my-links">
                <a className="text-emerald-950 hover:text-blue-200">Link to my HTB, THM, GitHub and LinkedIn</a>
            </Link>
            <Link href="/my-projects">
                <a className="text-emerald-950 hover:text-blue-200">My projects</a>
            </Link>
        </nav>
    );
}