const chars = '.-:_—·';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function scramble(element, finalText, iterations) {
  for (let i = 0; i < iterations; i++) {
    await sleep(70);
    element.textContent = finalText
      .split('')
      .map(c => c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)])
      .join('');
  }
  element.textContent = finalText;
}
