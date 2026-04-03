const names = ["Samantha Lee", "Ava Sharma", "Elena Rossi", "Mia Collins"];
const bios = [
  "✨ soft life | coffee",
  "🌸 dream life builder",
  "📍 italy lifestyle",
  "💫 aesthetic vibes"
];

let currentProfile = null;
let savedProfiles = [];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateProfile() {
  return {
    name: random(names),
    bio: random(bios),
    img: `https://source.unsplash.com/400x400/?portrait,${Math.random()}`,
    followers: randomNumber(1000, 100000)
  };
}

function renderCard(profile) {
  return `
    <div class="card" id="card">
      <img src="${profile.img}" width="100%" style="border-radius:10px"/>
      <h2>${profile.name} ✔</h2>
      <p>${profile.bio}</p>
      <p>👥 ${profile.followers} followers</p>
    </div>
  `;
}

function loadNewCard() {
  currentProfile = generateProfile();
  document.getElementById("cardContainer").innerHTML = renderCard(currentProfile);
}

function swipe(direction) {
  const card = document.getElementById("card");

  card.classList.add(direction === "left" ? "swipe-left" : "swipe-right");

  setTimeout(() => {
    loadNewCard();
  }, 300);
}

function saveProfile() {
  savedProfiles.push(currentProfile);
  renderSaved();
}

function renderSaved() {
  let html = "";
  savedProfiles.forEach(p => {
    html += `
      <div class="saved-card">
        <img src="${p.img}" />
        <p>${p.name}</p>
      </div>
    `;
  });

  document.getElementById("saved").innerHTML = html;
}

loadNewCard();
