const names = ["Samantha Lee", "Ava Sharma", "Elena Rossi", "Mia Collins"];
const bios = [
  "✨ soft life | coffee",
  "🌸 dream life builder",
  "📍 italy lifestyle",
  "💫 aesthetic vibes"
];

let currentProfile = null;
let likes = 0;

let savedProfiles = JSON.parse(localStorage.getItem("saved")) || [];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateProfile() {
  return {
    id: Date.now(),
    name: random(names),
    bio: random(bios),
    img: `https://picsum.photos/400/500?random=${Math.random()}`,
    followers: randomNumber(1000, 100000)
  };
}

function renderCard(profile) {
  return `
    <div class="card" id="card">
      <img src="${profile.img}" />
      <h2>${profile.name} ✔</h2>
      <p>${profile.bio}</p>
      <p>👥 ${profile.followers} followers</p>
    </div>
  `;
}

function loadNewCard() {
  currentProfile = generateProfile();
  likes = 0;
  document.getElementById("likesCount").innerText = likes;
  document.getElementById("cardContainer").innerHTML = renderCard(currentProfile);
  enableDrag();
}

function swipe(direction) {
  const card = document.getElementById("card");
  card.classList.add(direction === "left" ? "swipe-left" : "swipe-right");
  setTimeout(loadNewCard, 300);
}

function like() {
  likes++;
  const el = document.getElementById("likesCount");
  el.innerText = likes;
  el.classList.add("like-anim");
  setTimeout(() => el.classList.remove("like-anim"), 300);
}

function saveProfile() {
  savedProfiles.push(currentProfile);
  localStorage.setItem("saved", JSON.stringify(savedProfiles));
  renderSaved();
}

function shareProfile() {
  const text = `${currentProfile.name} - ${currentProfile.bio}`;
  navigator.clipboard.writeText(text);
  alert("Copied profile!");
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

/* DRAG SWIPE */
function enableDrag() {
  const card = document.getElementById("card");
  let startX = 0;

  card.onmousedown = e => {
    startX = e.clientX;

    document.onmousemove = e2 => {
      let moveX = e2.clientX - startX;
      card.style.transform = `translateX(${moveX}px) rotate(${moveX/10}deg)`;
    };

    document.onmouseup = e3 => {
      let diff = e3.clientX - startX;

      if (diff > 100) swipe("right");
      else if (diff < -100) swipe("left");
      else card.style.transform = "";

      document.onmousemove = null;
    };
  };
}

renderSaved();
loadNewCard();
