const names = ["Samantha Lee", "Ava Sharma", "Elena Rossi", "Mia Collins"];
const bios = [
  "✨ soft life",
  "🌸 dream life builder",
  "📍 italy lifestyle",
  "💫 aesthetic vibes"
];

const categories = [
  "woman,portrait",
  "girl,instagram",
  "fashion,model",
  "lifestyle,woman"
];

let likes = 0;
let currentProfile = null;

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateProfile() {
  const category = random(categories);

  return {
    name: random(names),
    bio: random(bios),
    img: `https://loremflickr.com/400/700/${category}?random=${Math.random()}`,
    followers: randomNumber(1000, 100000)
  };
}

function createReel() {
  const p = generateProfile();

  currentProfile = p;

  const reel = document.createElement("div");
  reel.className = "reel";

  reel.innerHTML = `
    <img src="${p.img}" />
    <div class="overlay">
      <h2>${p.name} ✔</h2>
      <p>${p.bio}</p>
      <p>👥 ${p.followers}</p>
    </div>
  `;

  return reel;
}

function loadInitial() {
  const feed = document.getElementById("feed");

  for (let i = 0; i < 5; i++) {
    feed.appendChild(createReel());
  }
}

function like() {
  likes++;
  document.getElementById("likesCount").innerText = likes;
}

function saveProfile() {
  alert("Saved (demo)");
}

function shareProfile() {
  navigator.clipboard.writeText("GhostGram profile 🔥");
  alert("Copied!");
}

/* INFINITE SCROLL */
document.getElementById("feed").addEventListener("scroll", () => {
  const feed = document.getElementById("feed");

  if (feed.scrollTop + feed.clientHeight >= feed.scrollHeight - 50) {
    feed.appendChild(createReel());
  }
});

loadInitial();
