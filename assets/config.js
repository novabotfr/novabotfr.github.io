// Adresse du dashboard (servi par le bot sur BD NOVA). Change-la ici si elle bouge.
window.NOVA = { dashboard: 'http://82.153.202.30:10023' };
document.querySelectorAll('[data-dash]').forEach((a) => { a.href = window.NOVA.dashboard + (a.dataset.dash || ''); });
const s = document.getElementById('cmd-search');
if (s) s.addEventListener('input', () => {
  const q = s.value.toLowerCase().trim();
  document.querySelectorAll('.cmd').forEach((c) => { c.style.display = !q || c.dataset.search.includes(q) ? '' : 'none'; });
});
