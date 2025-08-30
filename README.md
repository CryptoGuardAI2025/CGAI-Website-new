# CGAI – High‑End Static Site

**Tech:** Static HTML/CSS/JS · DE/EN i18n · TradingView embed · CoinGecko quick forecast · Shop PDFs · Legal pages.

## Deploy (GitHub Pages)
1. Neues Repo erstellen → ZIP Inhalt direkt ins Repo root hochladen.
2. In *Settings → Pages* als Source **Deploy from a branch** → *main / root*.
3. Fertig.

## Ersetzen
- Logo: `assets/img/logo.svg`
- Hero: `assets/img/hero-8k.jpg`
- PDFs: `assets/pdfs/*.pdf`
- Texte: in HTML + `assets/js/i18n.js`

## APIs
- Chart: TradingView (CRYPTOCAP:TOTAL)
- Forecast: CoinGecko `/simple/price` (ohne Key, öffentlich)

**Kein Finanzrat.** Siehe `disclaimer.html` und `terms.html`.
