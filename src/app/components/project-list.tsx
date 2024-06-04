import Link from "next/link";
export function ProjectList() {
  return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
        <ul className="pl-4 list-disc space-y-4 ">
          <li>
            <h3 className="text-lg">Tetris</h3>
            <p className="text-sm">In the subject INF101 i made tetris in Java.</p>
          </li>
          <li>
            <h3 className="text-lg">TowerDefense</h3>
            <p className="text-sm">Also in subject INF101 i made a tower defense game in Java.</p>
          </li>
          <li>
            <h3 className="text-lg">TowerDefense in libGDX</h3>
            <p className="text-sm">In the subject INF112, which is an introduction to software development, i made a
              better tower defense game together with a team of my fellow students</p>
          </li>
          <li>
            <h3 className="text-lg">Personal web-page</h3>
            <p className="text-sm">
              The very website you&apos;re looking at right now! Made with Next.js, typeScript and TailwindCSS.
            </p>
          </li>
        </ul>
        <br></br>
        <p className="text-sm text-white">
          Feel free to read about my experiences working on these projects on my{" "}
          <Link href="/my-blog" className="text-blue-400 hover:underline">
            blog
          </Link>{" "}
          .
        </p>
      </div>
  );
}
