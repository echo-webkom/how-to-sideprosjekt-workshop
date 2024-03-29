# Oppgave 4

## Lenker i Next.js

Nå som vi har en ny side på nettsiden vår, må gjøre det mulig å navigere til den. Vi ønsker da å lage en navigasjons-meny som lar oss bytte mellom de ulike sidene.

Vi kan bruke `Link`-komponenten fra `next/link` for å lage en navigasjons-meny. Dette er en komponent laget av Next.js som gjør at bytting av siden skjer raskere.

```tsx
import Link from "next/link";
```

[Les mer om `Link`-komponenten fra `next/link` her](https://nextjs.org/docs/app/api-reference/components/link).

## Lage en navigasjons-meny (Oppgave)

Lag en ny fil i `src/components`-mappen med navnet `navigation.tsx`. Importer deretter `Link`-komponenten fra `next/link` og lag en ny komponent som viser en navigasjons-meny. Denne menyen skal inneholde to lenker, en til forsiden og en til prosjektsiden.

<details>

<summary>💡 Hint</summary>

```tsx
// src/components/navigation.tsx
import Link from "next/link";

// Din kode...

export function Navigation() {
  return (
    <nav className="flex gap-4">
      <Link className="text-blue-300 hover:text-blue-100" href="/">
        Hjem
      </Link>
      <Link className="text-blue-300 hover:text-blue-100" href="/prosjekter">
        Prosjekter
      </Link>
    </nav>
  );
}
```

</details>

Etter du har laget navigasjons-menyen, kan du importere den i `app/layout.tsx` og sette den i mellom `<body> ... </body>`. `layout.tsx` lar oss vise innholdet på alle sidene våre.
