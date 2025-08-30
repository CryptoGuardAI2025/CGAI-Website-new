
document.addEventListener('DOMContentLoaded',()=>{
  if(typeof initLang==='function') initLang();
  const burger=document.getElementById('burger'), menu=document.getElementById('menu');
  burger?.addEventListener('click',()=>{burger.classList.toggle('open');menu.classList.toggle('open')})
  document.getElementById('menu-close')?.addEventListener('click',()=>{burger.classList.remove('open');menu.classList.remove('open')})

  const form=document.getElementById('predict-form');
  if(form){
    const out=document.getElementById('predict-out');
    const map={btc:'bitcoin',bitcoin:'bitcoin',eth:'ethereum',ethereum:'ethereum',xrp:'ripple',ripple:'ripple',sol:'solana',solana:'solana',ada:'cardano',cardano:'cardano',doge:'dogecoin',dogecoin:'dogecoin',shib:'shiba-inu','shiba inu':'shiba-inu',shiba:'shiba-inu',vet:'vechain',vechain:'vechain',vtho:'vethor-token',vethor:'vethor-token'};
    form.addEventListener('submit',async e=>{
      e.preventDefault(); const raw=(document.getElementById('coin').value||'').toLowerCase().trim(); const id=map[raw]||raw;
      out.textContent='Lade Daten …'; try{
        const r=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(id)}&vs_currencies=usd`);
        const j=await r.json(); const price=j?.[id]?.usd; if(!price) throw new Error('not found');
        const forecast=(price*1.2).toFixed(2); out.textContent=`${id}: $${price} → 1Y: $${forecast} (+20%)`;
      }catch{ out.textContent='Konnte Preis nicht laden. Schreibweise prüfen (z.B. bitcoin, ethereum, solana).'; }
    });
  }
});
