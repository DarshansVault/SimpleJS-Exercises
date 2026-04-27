const btn = document.getElementById("jokeBtn");
const loading = document.getElementById("loading");
const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
const errorEl = document.getElementById("error");
const copyBtn = document.getElementById("copyBtn");

let currentJoke = "";

async function fetchJoke() {
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );

    if (!res.ok) throw new Error("Network error");

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
}

btn.onclick = async () => {
  btn.disabled = true;
  loading.style.display = "block";

  setupEl.textContent = "";
  punchlineEl.textContent = "";
  errorEl.textContent = "";
  copyBtn.style.display = "none";

  try {
    const joke = await fetchJoke();

    setupEl.textContent = joke.setup;
    currentJoke = joke.setup + " ";

    setTimeout(() => {
      punchlineEl.textContent = joke.punchline;
      currentJoke += joke.punchline;
      copyBtn.style.display = "inline";
    }, 1500);
  } catch (err) {
    errorEl.textContent = "Oops! Failed to fetch joke 😅";
  } finally {
    loading.style.display = "none";
    btn.disabled = false;
  }
};

copyBtn.onclick = () => {
  navigator.clipboard.writeText(currentJoke);
};
