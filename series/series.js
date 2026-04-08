const headline = document.getElementById('headline');
const title = headline.textContent.trim();
window.addEventListener('load', () => scramble(headline, title, 18));
headline.addEventListener('mouseenter', () => scramble(headline, title, 8));
