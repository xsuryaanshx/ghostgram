const names = [
  "Samantha Lee", "Ava Sharma", "Elena Rossi",
  "Mia Collins", "Sofia Verma"
];

const bios = [
  "✨ soft life | coffee | calm",
  "🌸 building my dream life",
  "📍 italy | lifestyle",
  "💫 minimal & aesthetic",
  "🌿 slow mornings lover"
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateStories() {
  let stories = "";
  for (let i = 0; i < 5; i++) {
    stories += `
      <div class="story">
        <img src="https://source.unsplash.com/100x100/?face,${Math.random()}"/>
      </div>
    `;
  }
  return stories;
}

function generatePosts() {
  let grid = "";
  for (let i = 0; i < 6; i++) {
    grid += `
      <div class="post">
        <img src="https://source.unsplash.com/300x300/?lifestyle,${Math.random()}"/>
        <div class="likes">❤️ ${randomNumber(100,5000)}</div>
      </div>
    `;
  }
  return grid;
}

function generate() {
  document.getElementById("profile").classList.remove("hidden");

  document.getElementById("name").innerHTML =
    random(names) + ' <span class="verified">✔</span>';

  document.getElementById("bio").innerText = random(bios);

  document.getElementById("profileImg").src =
    `https://source.unsplash.com/200x200/?portrait,${Math.random()}`;

  document.getElementById("postsCount").innerText = 6;
  document.getElementById("followers").innerText = randomNumber(5000, 150000);
  document.getElementById("following").innerText = randomNumber(100, 2000);

  document.getElementById("stories").innerHTML = generateStories();
  document.getElementById("grid").innerHTML = generatePosts();
}
