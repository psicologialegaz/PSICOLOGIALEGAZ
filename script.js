(() => {
  'use strict';
  const menu=document.querySelector('#menu'), links=document.querySelector('#links'), dialog=document.querySelector('#bookingDialog');
  const phone='34611676519';
  const makeUrl=(message)=>`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const baseMessage='Hola, Ianire. Me gustaría solicitar información para comenzar un proceso de psicología.\n\nEl motivo de consulta es: [puedes explicarlo brevemente].\nMi disponibilidad durante los próximos 15 días es: [indica días y franjas horarias].\n\nMuchas gracias.';
  document.querySelector('#reserveWhatsapp').href=makeUrl(baseMessage);
  document.querySelector('#dialogWhatsapp').href=makeUrl(baseMessage);
  if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}
  document.querySelectorAll('.open-booking').forEach(b=>b.addEventListener('click',()=>{if(dialog.showModal)dialog.showModal();else location.hash='#reserva'}));
  document.querySelector('#bookingForm').addEventListener('submit',e=>{e.preventDefault();const profile=document.querySelector('#profile').value,modality=document.querySelector('#modality').value,preference=document.querySelector('#preference').value;const msg=`Hola, Ianire. Me gustaría solicitar información para comenzar un proceso de psicología.\n\nLa consulta sería para: ${profile}.\nModalidad preferida: ${modality}.\nPreferencia horaria: ${preference}.\n\nEl motivo de consulta es: [puedes explicarlo brevemente].\nMi disponibilidad durante los próximos 15 días es: [indica días y franjas horarias].\n\nMuchas gracias.`;window.open(makeUrl(msg),'_blank','noopener,noreferrer')});
  document.querySelectorAll('.dialog-close').forEach(b=>b.addEventListener('click',()=>dialog.close()));
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  document.querySelector('#year').textContent=new Date().getFullYear();
  addEventListener('scroll',()=>document.querySelector('#topbar').classList.toggle('scrolled',scrollY>10),{passive:true});
  if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
})();
