# Oppgave 3

## Litt som sider og routing i Next.js

Nå vet vi hvordan vi kan legge til nye elementer på siden, style de og flytte de ut i gjenbrukbare komponenter.

I denne oppgaven skal vi se litt nærmere på hvordan vi kan lage flere sider i Next.js. I Next.js har vi noe som heter for "file based routing". Dette vil si at om vi legger til en fil med navnet `page.tsx` i `app`-mappen vil det automatisk bli en side på nettsiden vår.

Det vil si at `app/page.tsx` vil bli URLen `http://localhost:3000/`. Om vi legger til en ny mappe med navnet `prosjekter` i `app`-mappen og lager en `page.tsx` vil det bli URLen `http://localhost:3000/prosjekter`.

Det er viktig at komponenten du ønsker skal vises på siden eksporterer en funksjon med navnet `default` (default export).

For eksempel:

```tsx
// src/app/prosjekter/page.tsx

export default function ProjectPage() {
  return (
    // Din kode her
  );
}
```

Vil bli til URLen `http://localhost:3000/prosjekter`.

[Du kan lese mer om file based routing i Next.js her](https://nextjs.org/docs/app/building-your-application/routing).

## Lage en prosjekt-side (Oppgave)

I denne oppgaven skal du lage en ny side som viser listen av prosjekter du laget forrige oppgave. Lag en ny fil i `app/prosjekter`-mappen med navnet `page.tsx`. Importer deretter `ProjectList`-komponenten du lagde forrige oppgave og vis den på siden.

<details>

<summary>💡 Hint</summary>

```tsx
// app/prosjekter/page.tsx
import { ProjectList } from "../../components/project-list";

export default function Prosjekter() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 px-4">
      <div className="max-w-screen-sm mx-auto text-lg flex flex-col gap-6 py-24">
        <h2 className="text-2xl text-gray-100 mb-4">Prosjekter</h2>
        <ProjectList />
      </div>
    </div>
  );
}
```

</details>

[Tilbake til oppgave 2](./oppgave-1.md)

[Trykk her for å gå til oppgave 3](./oppgave-3.md)
