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
  "fashion,model"
];

let likes = 0;

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateProfile() {
  const category = random(categories);

  return {
    name: random(names),
    bio: random(bios),
    img: `https://loremflickr.com/400/700/${category}?random=${Math.random()}`
  };
}

function createReel() {
  const p = generateProfile();

  const reel = document.createElement("div");
  reel.className = "reel";

  reel.innerHTML = `
    <img src="${p.img}" />
    <div class="overlay">
      <h2>${p.name} ✔</h2>
      <p>${p.bio}</p>
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
  alert("Saved!");
}

function shareProfile() {
  navigator.clipboard.writeText("GhostGram 🔥");
  alert("Copied!");
}

document.getElementById("feed").addEventListener("scroll", () => {
  const feed = document.getElementById("feed");

  if (feed.scrollTop + feed.clientHeight >= feed.scrollHeight - 50) {
    feed.appendChild(createReel());
  }
});

loadInitial();
