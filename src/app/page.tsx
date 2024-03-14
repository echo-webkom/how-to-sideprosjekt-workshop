export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center h-full gap-10 p-24">
      <h1 className="text-3xl font-medium">
        Velkommen til {'"'}How to sideprosjekt{'"'}
      </h1>

      <p>
        Om du vil ha oppgaver, les{" "}
        <span className="bg-gray-200 font-mono py-1 px-2 rounded-md">
          README.md
        </span>
        .
      </p>
    </main>
  );
}
