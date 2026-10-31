Hier ist eine komplette To-do-Anleitung von der ersten Idee bis zur fertigen, rechtssicheren Seite. Ich habe sie in Phasen gegliedert, damit du parallel arbeiten kannst (Recherche und Rechtliches laufen am besten gleichzeitig).

---

## 0. Drei Entscheidungen vorab

- [ ] **Zweck:** Rein privat/hobby-mäßig (keine Werbung, keine Einnahmen) oder doch „geschäftsmäßig"? Das entscheidet über Impressumspflicht, Gewerbeanmeldung und Steuern.
- [ ] **Technik:** Baukasten (Jimdo/IONOS/Squarespace), WordPress oder statische Seite (Astro/Hugo + GitHub Pages/Netlify). Für eine Seite mit ~6 Unterseiten reicht ein Baukasten völlig.
- [ ] **Pflegeaufwand:** Wer aktualisiert Öffnungszeiten? Ein „Geschäfte"-Verzeichnis veraltet schnell — das ist der größte Daueraufwand.

---

## Phase 1 — Konzept & Recherche (~1 Woche)

- [ ] **Umfang festlegen:** Startseite · Der Ort/Geschichte · Geschäfte & Gastronomie · Sehenswürdigkeiten & Ausflugsziele · Veranstaltungen · Kontakt · Impressum · Datenschutz
- [ ] **Zielgruppe klären:** Zugezogene, Besucher, Einheimische? Beeinflusst Ton und Inhalte.
- [ ] **Inhalte recherchieren:** Chronik/Ortsgeschichte, Kirche, Vereine, Wege in die Dresdner Heide, Busverbindungen. Quellen: dresden.de (Ortsamt/Stadtbezirk), Ortsverein/Heimatverein, Sächsische Zeitung, Stadtteilarchive.
- [ ] **Geschäfte-Liste anlegen:** Name, Adresse, Öffnungszeiten, Telefon, Website, kurze Beschreibung — **und Spalte „Info bestätigt am"**.
- [ ] **Quellen dokumentieren** (für spätere Korrekturen und um keine Gerüchte zu verbreiten).
- [ ] **Seitenstruktur als Baum skizzieren** (auf Papier reicht) inkl. Navigation.
- [ ] **Inventar:** Welche Fotos hast du selbst? Was fehlt noch?

⚠️ Achte darauf, keine unbelegten Behauptungen über Personen/Geschäfte zu schreiben — das kann wettbewerbs- und äußerungsrechtlich Ärger geben.

---

## Phase 2 — Rechtliches (parallel, unbedingt vor Livegang)

- [ ] **Impressum** (§ 5 DDG, früher TMG): Name, ladungsfähige Anschrift, E-Mail, ggf. Telefon. Bei redaktionellen Inhalten zusätzlich „Verantwortlich nach § 18 Abs. 2 MStV". Auch bei privaten Seiten empfohlen — „geschäftsmäßig" wird von Gerichten weit ausgelegt.
- [ ] **Datenschutzerklärung** (Art. 13 DSGVO): Hoster + Server-Logfiles, Kontaktmöglichkeit, Cookies/Tracking (falls ja), eingebundene Dienste. Vorlagen: eRecht24, Dr. Schwenke, datenschutz-generator.de — danach auf deine Seite anpassen.
- [ ] **Keine Third-Party-Embeds ohne Consent:** Google Fonts **lokal hosten** (dazu gab es 2022 ein Urteil des LG München I), Google Maps nur mit 2-Klick-Lösung oder durch OpenStreetMap/statische Karte ersetzen, YouTube nur mit Click-to-Load.
- [ ] **Cookie-Banner nur, wenn nötig:** Technisch notwendige Cookies brauchen keinen Banner. Verzichte auf Analytics (oder nutze DSGVO-freundliche Variante wie Matomo self-hosted / Plausible) — spart die halbe Datenschutz-Diskussion.
- [ ] **Bildrechte klären:** Nur eigene Fotos oder ausdrücklich lizenzierte (Wikimedia Commons, CC — Lizenz + Urheber nennen). **Kein** Google Street View, keine Zeitungsfotos, keine Bilder „von der Website des Ladens".
- [ ] **Personen auf Fotos:** § 22/23 KUG — erkennbare Personen brauchen eine Einwilligung. Bei Gruppenfotos vom Dorffest lieber nur Personen von hinten/weit weg.
- [ ] **Panoramafreiheit** (§ 59 UrhG): Gebäude von öffentlich zugänglichen Wegen aus fotografieren ist okay — nicht aber mit Leiter/Drohne über Zäune.
- [ ] **Geschäfte & Gastronomie um Erlaubnis bitten:** Kurz anrufen oder eine Mail schicken („Ich stelle euch auf goennsdorf.de vor, sind die Öffnungszeiten so korrekt?"). Das ist gleichzeitig Akquise für Inhalte und Foto-Erlaubnis.
- [ ] **Stadt Dresden:** Stadtwappen/Logo nicht ohne Genehmigung verwenden (Wappensatzung). Karten der Stadt nur mit Lizenz.
- [ ] **Karten:** OpenStreetMap nutzen → Namensnennung „© OpenStreetMap-Mitwirkende" (ODbL) nicht vergessen.
- [ ] **Gewerbe/Steuern:** Keine Werbung, keine Affiliate-Links, keine Einnahmen → in der Regel kein Gewerbe nötig. Sobald Anzeigen, Sponsoring oder Provisionen ins Spiel kommen: Gewerbeanmeldung, ggf. § 19 UStG (Kleinunternehmer), Werbung klar kennzeichnen.
- [ ] **Barrierefreiheit:** Das BFSG (ab 28.06.2025) nimmt Kleinstunternehmen aus und gilt nicht für private Hobbyseiten — aber Kontrast, Alt-Texte und Tastaturbedienbarkeit kosten nichts und sind guter Stil.

---

## Phase 3 — Domain & Hosting

- [ ] **Domainnamen brainstormen:** `goennsdorf.de`, `goennsdorf-dresden.de`, `unser-goennsdorf.de`. Umlaute immer als „oe" — „Gönnsdorf" funktioniert als Domain technisch, ist aber fehleranfällig.
- [ ] **Rechte prüfen:** Ortsnamen sind grundsätzlich frei nutzbar, aber mach eine kurze Recherche bei DPMA/einem Registrar, dass keine Marke kollidiert, und schau, ob die Domain schon von jemandem mit ähnlichem Projekt belegt ist.
- [ ] **Registrar wählen** (z. B. INWX, Netcup, IONOS, Cloudflare). Bei `.de` verlangt die DENIC eine in Deutschland erreichbare Anschrift — haste ja.
- [ ] **Hosting wählen:** Anbieter mit Serverstandort EU, **AV-Vertrag** (Auftragsverarbeitung nach Art. 28 DSGVO) im Paket, tägliche Backups.
- [ ] **SSL/HTTPS aktivieren** (Let's Encrypt, meist automatisch) und `https://` erzwingen.
- [ ] **E-Mail-Postfach** für `kontakt@…` einrichten (nicht die private Adresse veröffentlichen, sonst Spam).
- [ ] **Zugangsdaten sicher ablegen** (Passwortmanager, 2FA beim Registrar).

💡 Kostenrahmen: Domain 5–15 €/Jahr · Hosting 0–10 €/Monat · Baukasten 0–15 €/Monat · SSL kostenlos. Mit ~50 €/Jahr bist du gut dabei.

---

## Phase 4 — Inhalte & Bilder

- [ ] **Texte schreiben** — kurz, konkret, in deinen Worten. Pro Absatz eine Idee, keine Amtsdeutsch-Sätze aus der Quelle kopieren (Urheberrecht!).
- [ ] **Fototour machen:** Dorfplatz, Kirche, markante Gebäude, Wege in die Heide, Geschäfte von außen (mit Erlaubnis). Goldenes Licht = morgens/abends.
- [ ] **Bilder optimieren:** Auf ~1600 px Breite verkleinern, als WebP/JPEG komprimieren (Tool: Squoosh), **Alt-Texte** schreiben.
- [ ] **Bildnachweise** in einer Liste sammeln (Urheber, Lizenz, Quelle) — kommt ins Impressum oder auf eine Credits-Seite.
- [ ] **Stand-Datum** auf die Seite („Letzte Aktualisierung: …").

---

## Phase 5 — Website bauen

- [ ] **Template/Theme wählen:** schlicht, gut lesbar, mobiltauglich. Kein Schnickschnack.
- [ ] **Seiten anlegen** gemäß deiner Struktur aus Phase 1.
- [ ] **Navigation:** max. 6–7 Punkte, auf jeder Seite gleich, Logo verlinkt auf Startseite.
- [ ] **Startseite:** ein starkes Bild, ein Satz, was die Seite bietet, Schnellzugriffe auf „Geschäfte" und „Sehenswürdigkeiten".
- [ ] **Geschäfte-Seite:** Karten/Liste mit Adresse, Öffnungszeiten, Link, kleinem Foto. Nach Kategorien gruppieren (Handwerk, Gastronomie, Dienstleistung).
- [ ] **Sehenswürdigkeiten:** je ein Absatz + Foto + „hin kommen"-Info (Buslinie, Fußweg).
- [ ] **Kontakt:** am einfachsten `mailto:`-Link — dann brauchst du kein Formular mit DSGVO-Zusatzaufwand.
- [ ] **Impressum- und Datenschutz-Seite verlinken** (Footer, auf jeder Seite erreichbar, ohne Login, ohne Scrollen).
- [ ] **Mobile testen** (Handy, Tablet) und auf mindestens zwei Browsern.

---

## Phase 6 — SEO & Technik-Check

- [ ] **Titel & Meta-Description** pro Seite, mit lokalem Bezug: „Gönnsdorf (Dresden) – Geschäfte, Geschichte & Sehenswürdigkeiten".
- [ ] **Überschriften-Hierarchie** sauber (genau eine H1 pro Seite).
- [ ] **Strukturierte Daten** (Schema.org `Place` oder `LocalBusiness` für die Geschäfte) — kleiner Aufwand, gut für Google.
- [ ] `sitemap.xml` und `robots.txt` erzeugen (Baukasten macht das oft automatisch).
- [ ] **Bei Google Search Console anmelden** und Sitemap einreichen.
- [ ] **Ladezeit prüfen** (PageSpeed Insights): Bilder sind zu 90 % der Grund für langsame Seiten.
- [ ] **Barrierefreiheits-Check:** Alt-Texte, Kontraste, Tastatur-Navigation, keine PDF-only-Inhalte.
- [ ] **Alle Links testen**, besonders externe.

---

## Phase 7 — Livegang & Pflege

- [ ] **Impressum & Datenschutz gegenlesen** (am besten von jemand anderem) — die zwei häufigsten Abmahnpunkte.
- [ ] **Selbst googeln:** Findest du die Seite? Erscheint der richtige Titel?
- [ ] **Freunde/Familie testen lassen** mit der Frage: „Was fehlt dir?"
- [ ] **Ortsverein & Geschäfte informieren** — bringt Besucher und Feedback.
- [ ] **Backup-Strategie:** Hoster-Backups aktiv? Eigene Export-Datei irgendwo lokal?
- [ ] **Wartungsplan:** 2× im Jahr Öffnungszeiten prüfen, Veranstaltungen aktualisieren, Domain-Verlängerung im Kalender notieren (läuft sonst aus!).
- [ ] **Analytics minimal:** Wenn du Zahlen willst, Plausible/Matomo statt Google Analytics — oder ganz weglassen.

---

## Häufigste Stolperfallen

| Falle | Konsequenz |
|---|---|
| Kein Impressum | Abmahnung, teuer |
| Google Fonts extern geladen | DSGVO-Verstoß (LG München I 2022) |
| Fotos aus dem Netz | Urheberrechtsverstoß |
| Öffnungszeiten veraltet | Verärgerte Leser, Glaubwürdigkeit weg |
| Werbe-Cookies ohne Banner | Datenschutzverstoß |
| Domain nicht verlängert | Seite und Adresse weg |

---

Soll ich dir daraus eine **Notiz mit Checkboxen** machen, die du abhaken kannst? Und magst du verraten, welche Technik du bevorzugst (Baukasten oder WordPress) — dann kann ich dir die Schritte 3 bis 5 konkret für dein Setup ausarbeiten, inklusive fertiger Impressum-/Datenschutz-Struktur und einer Startseiten-Gliederung.