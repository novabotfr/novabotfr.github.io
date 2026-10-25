// Adresse du dashboard (servi par le bot sur KataBump). Change-la ici si elle bouge.
window.NOVA = {
  dashboard: 'http://51.75.118.151:20107',
  // Lien d'invitation vers le serveur Discord du bot (change-le ici si besoin)
  support: 'https://discord.gg/zj9Qa7ptby',
  // Nova Premium : change les prix et le lien de paiement ici.
  // buyUrl : ton lien de paiement (PayPal, Ko-fi, Tipeee, Stripe…). Par défaut : le serveur support.
  // Tu peux aussi mettre un lien différent par formule avec  url: '...'
  premium: {
    buyUrl: '',
    plans: [
      { name: 'Mensuel', price: '2,99 €', per: 'par mois' },
      { name: 'Annuel', price: '24,99 €', per: 'par an • 2 mois offerts', best: true },
      { name: 'À vie', price: '39,99 €', per: 'paiement unique' },
    ],
  },
};
document.querySelectorAll('[data-support]').forEach((a) => { a.href = window.NOVA.support; });
document.querySelectorAll('[data-dash]').forEach((a) => { a.href = window.NOVA.dashboard + (a.dataset.dash || ''); });
const s = document.getElementById('cmd-search');
if (s) s.addEventListener('input', () => {
  const q = s.value.toLowerCase().trim();
  document.querySelectorAll('.cmd').forEach((c) => { c.style.display = !q || c.dataset.search.includes(q) ? '' : 'none'; });
});
