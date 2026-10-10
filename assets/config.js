// Adresse du dashboard (servi par le bot sur KataBump). Change-la ici si elle bouge.
window.NOVA = {
  dashboard: 'http://51.75.118.151:20107',
  // Lien d'invitation vers le serveur Discord du bot (change-le ici si besoin)
  support: 'https://discord.gg/69Zmsb3dA7',
};
document.querySelectorAll('[data-support]').forEach((a) => { a.href = window.NOVA.support; });
document.querySelectorAll('[data-dash]').forEach((a) => { a.href = window.NOVA.dashboard + (a.dataset.dash || ''); });
const s = document.getElementById('cmd-search');
if (s) s.addEventListener('input', () => {
  const q = s.value.toLowerCase().trim();
  document.querySelectorAll('.cmd').forEach((c) => { c.style.display = !q || c.dataset.search.includes(q) ? '' : 'none'; });
});
