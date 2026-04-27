const pwd = document.getElementById("pwd");
const bar = document.getElementById("bar");
const strengthText = document.getElementById("strength");

const rules = {
  len: document.getElementById("len"),
  upper: document.getElementById("upper"),
  lower: document.getElementById("lower"),
  digit: document.getElementById("digit"),
  special: document.getElementById("special"),
};

pwd.addEventListener("input", () => {
  const val = pwd.value;

  let score = 0;

  const checks = {
    len: val.length >= 8,
    upper: /[A-Z]/.test(val),
    lower: /[a-z]/.test(val),
    digit: /[0-9]/.test(val),
    special: /[^A-Za-z0-9]/.test(val),
  };

  for (let key in checks) {
    if (checks[key]) {
      rules[key].textContent = "✅ " + rules[key].textContent.slice(2);
      score++;
    } else {
      rules[key].textContent = "❌ " + rules[key].textContent.slice(2);
    }
  }

  let color = "red";
  let text = "Weak";

  if (score >= 2 && score <= 3) {
    color = "orange";
    text = "Fair";
  }
  if (score === 4) {
    color = "blue";
    text = "Strong";
  }
  if (score === 5) {
    color = "green";
    text = "Very Strong";
  }

  bar.style.width = (score / 5) * 100 + "%";
  bar.style.background = color;
  strengthText.textContent = text;
});

document.getElementById("toggle").onclick = () => {
  pwd.type = pwd.type === "password" ? "text" : "password";
};
