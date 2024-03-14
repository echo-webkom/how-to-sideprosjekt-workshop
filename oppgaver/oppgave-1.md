# Oppgave 1

Vi starter med å få en enkel oversikt over hvordan man kan legge til nye elementer på en nettside. Gå til [src/app/page.tsx](../src/app/page.tsx), slett all i `return` i funksjonen `Home` og erstatt det med en liten introduksjon av deg selv. Her skriver du noe som heter for JSX, som er veldig likt HTML.

Det som er i `return` vil bli vist på nettsiden. Om du vil legge til en overskrift, kan du bruke `<h1>`, for en paragraf kan du bruke `<p>`. Om du vil legge til en liste, kan du bruke `<ul>` og `<li>`.

Vær kreativ! Legg til så mye du vil. Jo mer du legger til, jo mer lærer du. Om du har vært borti HTML før, merker du sikkert at dette ser veldig likt ut. De mest grunnlegende og mest brukte elementene er:

- `<div>`: En "container" for andre elementer.
- `<h1>`, `<h2>`, ..., `<h6>`: Overskrifter. `h1` er den største, `h6` er den minste.
- `<p>`: En paragraf.

[En mer detaljert oversikt over HTML-elementer finner du her](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

<details>
<summary>💡 Hint</summary>

```tsx
export default function Home() {
  return (
    <div>
      <h1>Hei, jeg heter [ditt navn]!</h1>
      <p>Jeg studerer [studie] på Universitetet i Bergen.</p>
    </div>
  );
}
```

</details>

Siden vi bruker Tailwind CSS kommer alt av default styling av elementer være fjernet. Derfor må vi style de selv. Man kan for eksempel legge til `className="text-2xl"` på en `<h1>` for å gjøre teksten større. Om du vil ha en overskrift som er enda større, kan du bruke `text-3xl`, `text-4xl`, osv. Du kan også legge til `className="text-center"` i den ytterste `<div>` for å sentrere alt innholdet.

<details>
<summary>💡 Hint</summary>

```tsx
export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">Hei, jeg heter [ditt navn]!</h1>
      <p>Jeg studerer [studie] på Universitetet i Bergen.</p>
    </div>
  );
}
```

</details>

Du kan lese mer om [Tailwind CSS her](https://tailwindcss.com/docs/utility-first).

<details>

<summary>💡 Her en et eksempel på hvordan det kan se ut:</summary>

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 px-4">
      <div className="max-w-screen-sm mx-auto text-lg flex flex-col gap-6 py-24">
        <h1 className="text-4xl font-bold text-gray-100">
          👋🏻 Hei, jeg heter Andreas Aanes!
        </h1>
        <p>
          Jeg studerer Datateknologi på Universitetet i Bergen, og har en stor
          interesse for webutvikling.
        </p>

        <p>🚀 Akkurat nå holder jeg på å lære meg:</p>

        <ul className="pl-4 list-disc">
          <li>Next.js</li>
          <li>Typescript</li>
          <li>TailwindCSS</li>
          <li>Vercel</li>
        </ul>
      </div>
    </div>
  );
}
```

</details>

Om mye er nytt for deg ikke vær redd for å søke opp dokumentasjon på nettet, spørre ChatGPT eller spørre oss.

Lykke til!

[Trykk her for å gå til oppgave 2](./oppgave-2.md)
