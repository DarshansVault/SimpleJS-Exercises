const phrases = [
  "Hello World",
  "I am learning JS",
  "This is a typewriter",
  "Xahsdkajbsdoiu",
];

const textEl = document.getElementById("text");

let phraseIndex = 0;
let charIndex = 0;

function type(phrase, done) {
  if (charIndex < phrase.length) {
    textEl.textContent += phrase[charIndex];
    charIndex++;
    setTimeout(() => type(phrase, done), 80);
  } else {
    setTimeout(done, 1500);
  }
}

function erase(done) {
  if (charIndex > 0) {
    textEl.textContent = textEl.textContent.slice(0, -1);
    charIndex--;
    setTimeout(() => erase(done), 80);
  } else {
    done();
  }
}

function loop() {
  const current = phrases[phraseIndex];

  type(current, () => {
    erase(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      loop();
    });
  });
}

loop();
