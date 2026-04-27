const form = document.getElementById("form");
const cards = document.getElementById("cards");

function setError(id, msg) {
  document.getElementById(id).textContent = msg;
}

async function checkImage(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    const type = res.headers.get("content-type");

    if (!res.ok || !type.startsWith("image/")) return false;

    return true;
  } catch {
    return false;
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const bio = document.getElementById("bio").value;
  const avatar = document.getElementById("avatar").value;

  let valid = true;

  if (name.length < 2 || name.length > 50) {
    setError("nameErr", "Invalid name");
    valid = false;
  } else setError("nameErr", "✅");

  const userRegex = /^[a-zA-Z0-9_]{3,20}$/;
  if (!userRegex.test(username)) {
    setError("userErr", "Invalid username");
    valid = false;
  } else setError("userErr", "✅");

  if (!email.includes("@") || !email.includes(".")) {
    setError("emailErr", "Invalid email");
    valid = false;
  } else setError("emailErr", "✅");

  if (bio.length > 160) {
    setError("bioErr", "Max 160 chars");
    valid = false;
  } else setError("bioErr", "✅");

  try {
    new URL(avatar);
    setError("avatarErr", "Checking...");
  } catch {
    setError("avatarErr", "Invalid URL");
    valid = false;
  }

  if (!valid) return;
  const isImage = await checkImage(avatar);
  if (!isImage) {
    setError("avatarErr", "Must be valid image");
    return;
  } else {
    setError("avatarErr", "✅");
  }

  createCard(name, username, email, bio, avatar);

  form.reset();
});

function createCard(name, username, email, bio, avatar) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${avatar}">
    <h3>${name}</h3>
    <p>@${username}</p>
    <a href="mailto:${email}">${email}</a>
    <p>${bio}</p>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;

  card.querySelector(".delete").onclick = () => {
    card.remove();
  };

  card.querySelector(".edit").onclick = () => {
    document.getElementById("name").value = name;
    document.getElementById("username").value = username;
    document.getElementById("email").value = email;
    document.getElementById("bio").value = bio;
    document.getElementById("avatar").value = avatar;

    card.remove();
  };

  cards.appendChild(card);
}
