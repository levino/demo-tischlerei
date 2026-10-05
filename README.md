# Tischlerei Nordholz – Website

> **Demo:** Dies ist eine Beispiel-Website eines **fiktiven Betriebs**. Name, Adresse und Telefonnummer sind ausgedacht.

**Live:** https://levino.github.io/demo-tischlerei/

## So ändern Sie diese Website

Ganz ohne Technik-Kenntnisse – wie bei einem Wunschzettel:

1. **Neues Issue öffnen** – oben auf „Issues“ und dann „New issue“ tippen (geht auch am Handy). Am einfachsten mit der Vorlage „Änderungswunsch“.
2. **Mit `@claude` beginnen** und Ihren Wunsch in eigenen Worten aufschreiben, zum Beispiel:
   - „@claude Wir haben vom 23.12. bis 2.1. Betriebsferien, bitte oben einen Hinweis.“
   - „@claude Freitags haben wir ab jetzt bis 14 Uhr offen.“
   - „@claude Die Stelle als Tischler ist besetzt, bitte rausnehmen.“
   - „@claude Neue Referenz: Küche aus Eiche in Lindenau, 2026.“
3. **Kurz warten** – Claude setzt den Wunsch um und antwortet im Issue.
4. **Vorschau ansehen** – im Änderungsvorschlag (Pull Request) erscheint nach ein, zwei Minuten ein Vorschau-Link.
5. **Übernehmen** – passt alles, auf „Merge“ tippen. Kurz darauf ist die Änderung live.

Etwas gefällt noch nicht? Einfach im Änderungsvorschlag antworten, wieder mit `@claude` am Anfang.

## Was steckt dahinter?

- Inhalte liegen als einfache Textdateien in `src/content/` und `src/data/betrieb.yaml`.
- Die Seite wird mit [Astro](https://astro.build) gebaut und über GitHub Pages veröffentlicht.
- Jeder Änderungsvorschlag bekommt automatisch eine eigene Vorschau.

Lokal starten: `npm ci && npm run dev`
