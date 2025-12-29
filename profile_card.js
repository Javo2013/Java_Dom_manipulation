const nameInput = document.getElementById("name-input");
const titleInput = document.getElementById("title-input");
const bioInput = document.getElementById("bio-input");

const updateBtn = document.getElementById("update-card");
const themeBtn = document.getElementById("toggle-theme");

const profileCard = document.getElementById("profile-card");
const profileName = document.getElementById("profile-name");
const profileTitle = document.getElementById("profile-title");
const profileBio = document.getElementById("profile-bio");


let updateCount = 0;

const counterEl = document.createElement("p");
counterEl.id = "update-counter";
counterEl.classList.add("hidden"); //should only show after the first update
counterEl.textContent = "updated 0 times";

//Counter for under bio
profileBio.insertAdjacentElement("afterend", counterEl);


// ==== Class Theme setup ====
const styleTag = document.createElement("style");
styleTag.textContent = `
  .profile-card.dark {
    background: #111;
    color: #f5f5f5;
    border-color: #f5f5f5;
  }
  body.dark {
    background: #0b0b0b;
    color: #f5f5f5;
  }
`;
document.head.appendChild(styleTag);

updateBtn.addEventListener("click", () => {
  // Trim input values to avoid whitespace-only updates
  const newName = nameInput.value.trim();
  const newTitle = titleInput.value.trim();
  const newBio = bioInput.value.trim();

  // Handle empty inputs gracefully:
  // Only update a field if the user actually typed something.
  if (newName !== "") profileName.textContent = newName;
  if (newTitle !== "") profileTitle.textContent = newTitle;
  if (newBio !== "") profileBio.textContent = newBio;

  // Clear inputs after updating
  nameInput.value = "";
  titleInput.value = "";
  bioInput.value = "";

  // Update counter (show only after first update)
  updateCount += 1;
  counterEl.textContent = `Updated ${updateCount} ${updateCount === 1 ? "time" : "times"}`;

  if (updateCount === 1) {
    counterEl.classList.remove("hidden");
  }
});

// ===== Theme Toggle functionality =====
themeBtn.addEventListener("click", () => {
  // Toggle a dark class on both the body and the card
  document.body.classList.toggle("dark");
  profileCard.classList.toggle("dark");
});