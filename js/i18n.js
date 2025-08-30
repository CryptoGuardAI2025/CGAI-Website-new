
const I18N = {
  de:{
    nav_start:"Start",nav_crypto:"Krypto",nav_mindset:"Mindset",nav_shop:"Shop",nav_blog:"Blog",nav_about:"Über uns",
    hero_title:"Wir setzen den Maßstab für klare Entscheidungen im Kryptomarkt.",
    hero_sub:"Live-Daten, geprüfte Informationen und konservative Modell-Prognosen – Ehrlichkeit vor Hype.",
    who_title:"Wer wir sind",
    who_body:"CGAI baut ein Navigationssystem für Kryptomärkte. Fokus: Transparenz, robuste Prozesse, disziplinierte Regeln und nachvollziehbare Modelle. Keine Versprechen, keine Garantien – Tools, mit denen du eigenständig bessere Entscheidungen triffst.",
    disclaimer_short:"CGAI bietet keine Finanzberatung.",login:"Login",
    market_chart:"Gesamtmarkt-Chart", quick_pred:"KI‑Schnellprognose (MVP)", forecast_hint:"Hinweis: Demo‑Modell (+20%). Später echte KI über Serverless‑API."
  },
  en:{
    nav_start:"Home",nav_crypto:"Crypto",nav_mindset:"Mindset",nav_shop:"Shop",nav_blog:"Blog",nav_about:"About",
    hero_title:"We set the standard for clear decisions in the crypto market.",
    hero_sub:"Live data, verified information and conservative model forecasts – honesty over hype.",
    who_title:"Who we are",
    who_body:"CGAI builds a navigation system for crypto markets. Focus: transparency, robust processes, disciplined rules and auditable models. No promises, no guarantees – tools that help you decide independently.",
    disclaimer_short:"CGAI does not provide financial advice.",login:"Login",
    market_chart:"Total Market Chart", quick_pred:"AI Quick Forecast (MVP)", forecast_hint:"Note: demo model (+20%). Real AI later via serverless API."
  }
}
function setLang(lang){
  localStorage.setItem('lang',lang); document.documentElement.setAttribute('lang',lang);
  const t=I18N[lang]||I18N.de; document.querySelectorAll('[data-i18n]').forEach(el=>{ const k=el.dataset.i18n; if(t[k]) el.textContent=t[k]; });
}
function initLang(){ const saved=localStorage.getItem('lang')||'de'; setLang(saved);
  document.getElementById('lang-de')?.addEventListener('click',()=>setLang('de'));
  document.getElementById('lang-en')?.addEventListener('click',()=>setLang('en'));
}
