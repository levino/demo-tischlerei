# Hinweise für Claude

Diese Website gehört der (fiktiven) **Tischlerei Nordholz**. Änderungswünsche kommen als GitHub-Issue mit „@claude …“.

## Wer schreibt Ihnen?

- Inhaber und Mitarbeitende eines Handwerksbetriebs – **keine** Technik-Profis.
- Sie schreiben meist **am Handy**: kurz, manchmal mit Tippfehlern, ohne Fachbegriffe.
- Antworten Sie **kurz, freundlich, auf Deutsch und in der Sie-Form**. Keine Fachbegriffe (nicht „Commit“, „Branch“, „Build“, „Markdown“, „Frontmatter“ …). Sagen Sie lieber „Änderung“, „Vorschau“, „übernehmen“.
- Wenn ein Wunsch unklar ist, setzen Sie die naheliegendste Lösung um und erwähnen Sie sie kurz – nur bei echten Unklarheiten nachfragen.

## Was Sie ändern dürfen

Inhalte **ausschließlich** in diesen Ordnern ändern:

| Was | Wo |
| --- | --- |
| Name, Adresse, Telefon, E-Mail, Öffnungszeiten | `src/data/betrieb.yaml` |
| Leistungen (Startseite + /leistungen) | `src/content/leistungen/*.md` (`title`, `kurz`, `reihenfolge`) |
| Referenzen | `src/content/referenzen/*.md` (`title`, `ort`, `jahr`, `kurz`) |
| Stellenangebote | `src/content/jobs/*.md` (`title`, `art`, `aktiv`) – Stelle beenden: `aktiv: false` |
| Hinweise / Banner (Urlaub, Betriebsferien, Aktionen …) | `src/content/hinweise/*.md` |

Design, Layout, CSS, Komponenten und Konfiguration **nicht anfassen**, außer es wird ausdrücklich gewünscht.

## Hinweise / Banner

Ein Hinweis erscheint als auffälliger Banner ganz oben auf der Startseite. Legen Sie dafür eine neue Datei an, z. B. `src/content/hinweise/betriebsferien-weihnachten.md`:

```md
---
title: Betriebsferien zwischen den Jahren
text: Vom 23. Dezember bis 2. Januar ist unsere Werkstatt geschlossen. Ab dem 5. Januar sind wir wieder für Sie da.
von: 2026-12-01
bis: 2027-01-02
---
```

- `von` = ab wann der Banner sichtbar ist, `bis` = letzter Tag, an dem er sichtbar ist. Beides ist optional (ohne Datum: immer sichtbar).
- Wenn kein Startdatum genannt wird: `von` = heute. `bis` = Ende des genannten Zeitraums.
- Abgelaufene Hinweise dürfen gelöscht werden, wenn darum gebeten wird.

## Datumsangaben

- Nutzer schreiben deutsche Datumsangaben: „24.12.“, „24.12.26“, „ab 1. Dezember“, „über Weihnachten“, „nächste Woche“.
- Ermitteln Sie das **heutige Datum und Jahr immer mit `date`** – niemals raten. Fehlt die Jahreszahl, nehmen Sie das nächste passende Datum in der Zukunft.
- In die Dateien schreiben Sie Datumsangaben als `JJJJ-MM-TT` (z. B. `2026-12-24`).
- Im sichtbaren Text Datumsangaben deutsch schreiben („24. Dezember“).

## Ablauf (immer so)

1. Neuen Zweig anlegen (nie direkt auf `main` arbeiten oder pushen).
2. Inhalte ändern.
3. Prüfen: `npm ci && npm run build` – muss fehlerfrei durchlaufen. Bei Fehlern korrigieren.
4. Committen und den Zweig pushen.
5. **Immer selbst einen Pull Request öffnen** mit `gh pr create`:
   - Titel auf Deutsch, kurz, z. B. „Betriebsferien über Weihnachten eintragen“
   - Body: ein, zwei Sätze, was geändert wurde, und `Closes #<Issue-Nummer>`
6. Im Issue knapp antworten, z. B.:

   > Erledigt! Ich habe die Betriebsferien vom 23.12. bis 2.1. als Hinweis oben auf der Startseite eingetragen. In ein, zwei Minuten erscheint im Änderungsvorschlag ein Vorschau-Link. Wenn alles passt, klicken Sie dort auf „Merge“ – dann ist es live.

Niemals auf `main` pushen. Niemals Pull Requests selbst zusammenführen.
