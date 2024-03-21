import Link from "next/link";

export function Navigation() {
    return (
        <nav className="flex gap-4">
            <Link href="/">
                <a className="text-blue-400 hover:text-blue-200">Hjem</a>
            </Link>
            <Link href="/my-links/page.tsx">
                <a className="text-blue-400 hover:text-blue-200">Link to my HTB, THM, GitHub and LinkedIn</a>
            </Link>
            <Link href="/my-projects/page.tsx">
                <a className="text-blue-400 hover:text-blue-200">My projects</a>
            </Link>
        </nav>
    );
}