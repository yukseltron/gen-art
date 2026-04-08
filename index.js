const series = { worm: 30, flutter: 20, radius: 25, fluid: 25, plume: 20, grid: 25, wave: 25, organic: 25 };
const CDN = 'https://pub-0881700de6094af59d2170b91c991f80.r2.dev';

function randomClip(name) {
  const n = Math.floor(Math.random() * series[name]) + 1;
  return `${CDN}/gallery/${name}/${name}-${String(n).padStart(2, '0')}.mp4`;
}

document.querySelectorAll('.series-card').forEach(card => {
  const name = card.getAttribute('href').replace('series/', '').replace('.html', '');
  card.querySelector('.card-preview').src = randomClip(name);
});

document.querySelectorAll('.card-title').forEach(el => {
  window.addEventListener('load', () => scramble(el, el.dataset.label, 18));
  el.addEventListener('mouseenter', () => scramble(el, el.dataset.label, 8));
});
