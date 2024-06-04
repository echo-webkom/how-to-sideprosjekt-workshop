import Link from "next/link";

export function Navigation() {
  return (
    <div className="pt-4 flex justify-center">
      <nav className="flex gap-4 text-center">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Link href="/" className="text-emerald-950 hover:text-blue-200">
            Home
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Link href="/my-links" className="text-emerald-950 hover:text-blue-200">
            Social links
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Link href="/my-projects" className="text-emerald-950 hover:text-blue-200">
            My projects
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Link href="/my-blog" className="text-emerald-950 hover:text-blue-200">
            Blog posts
          </Link>
        </div>
      </nav>
    </div>
  );
}
