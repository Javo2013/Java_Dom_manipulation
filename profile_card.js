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

//Counter for under my bio
profileBio.insertAdjacentElement("afterend", counterEl);


// ==== Class Theme setup ====
const styleTag = document. creationElement("style");
styleTag.textcontent = `

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
