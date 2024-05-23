import Link from "next/link";

export function Navigation() {
  return (
    <div className="pt-4 flex justify-center">
      <nav className="flex gap-4 text-center">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Link href="/">
            <a className="text-emerald-950 hover:text-blue-200">Home</a>
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Link href="/my-links">
            <a className="text-emerald-950 hover:text-blue-200">Social links</a>
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Link href="/my-projects">
            <a className="text-emerald-950 hover:text-blue-200">My projects</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
