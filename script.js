const names = [
  "Samantha Lee", "Ava Sharma", "Elena Rossi",
  "Mia Collins", "Sofia Verma", "Isabella Khan"
];

const bios = [
  "✨ soft life | coffee | calm",
  "🌸 building my dream life",
  "📍 italy | lifestyle",
  "💫 minimal & aesthetic",
  "🌿 slow mornings lover"
];

const captions = [
  "just vibing ✨",
  "soft life energy 💫",
  "this moment >>>",
  "late night thoughts 🌙",
  "caught in peace ☕"
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generate() {
  document.getElementById("profile").classList.remove("hidden");

  document.getElementById("name").innerText = random(names);
  document.getElementById("bio").innerText = random(bios);

  document.getElementById("profileImg").src =
    `https://source.unsplash.com/200x200/?portrait,${Math.random()}`;

  document.getElementById("postsCount").innerText = 6;
  document.getElementById("followers").innerText = randomNumber(1000, 90000);
  document.getElementById("following").innerText = randomNumber(100, 1000);

  let grid = "";

  for (let i = 0; i < 6; i++) {
    const img = `https://source.unsplash.com/300x300/?girl,${Math.random()}`;
    const likes = randomNumber(100, 5000);

    grid += `
      <div class="post">
        <img src="${img}" />
        <div class="likes">❤️ ${likes}</div>
      </div>
    `;
  }

  document.getElementById("grid").innerHTML = grid;
}
