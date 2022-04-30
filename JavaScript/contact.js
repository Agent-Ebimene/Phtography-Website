// Sidebar Menu
const navButton = document.getElementById("nav-menu");
const sideBarMenu = document.querySelector(".sidebar-menu");
const closeBtn = document.getElementById("close-btn");
console.log("hey");
console.log(navButton);
navButton.addEventListener("click", () => {
  sideBarMenu.classList.add("visible");
});
closeBtn.addEventListener("click", () => {
  sideBarMenu.classList.remove("visible");
});

// Dropdown Menu
const homebar = document.getElementById("home-bars");
const dropdownMenu = document.querySelector(".dropdown-menu");
const barIcon = document.querySelector(".fa-bars");
homebar.addEventListener("click", () => {
  dropdownMenu.classList.toggle("visible");
  if (dropdownMenu.classList.contains("visible")) {
    barIcon.className = "fa fa-times";
  } else {
    barIcon.className = "fa fa-bars";
  }
});

const rightArrow = document.querySelector(".testimonial-next");
const leftArrow = document.querySelector(".fa-chevron-left");
const quote = document.querySelector(".testimonial-text");
const clientName = document.querySelector(".client-name");
console.log(rightArrow);
let count = 0;
const quotes = [
  {
    message: "Photography is the universal language that speaks to the Heart",
    name: "SAMANTHA JOHNES, CA",
  },
  {
    message: "Photography brings in alot of self-confidence to the individual",
    name: "TOM BROWN CA",
  },
];
// Qoutes Section
function changeQuote() {
  const message = quotes[count];
  quote.textContent = message.message;
  clientName.textContent = message.name;
}
rightArrow.addEventListener("click", () => {
  count++;
  if (count >= quotes.length) {
    count = 0;
  }
  changeQuote();
});
leftArrow.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = quotes.length - 1;
  }
  changeQuote();
});
setInterval(() => {
  count++;
  if (count >= quotes.length) {
    count = 0;
  }
  changeQuote();
}, 4000);

// Contact Dropdown

const contactBtn = document.getElementById("contact-link-one");
const personsDropdown = document.querySelector(".persons-dropdown");
const downArrow = document.querySelector("#persons-down-arrow>i");
const categoryDropdown = document.querySelector(".category");
const categoryBtn = document.getElementById("contact-link-two");
const categoryIcon = document.getElementById("category-arrow");
contactBtn.addEventListener("click", () => {
  personsDropdown.classList.toggle("person-visible");
  if (personsDropdown.classList.contains("person-visible")) {
    downArrow.className = "fa fa-angle-up";
  } else {
    downArrow.className = "fa fa-angle-down";
  }
});

categoryBtn.addEventListener("click", () => {
  categoryDropdown.classList.toggle("category-visible");
  if (categoryDropdown.classList.contains("category-visible")) {
    categoryIcon.className = "fa fa-angle-up";
  } else {
    categoryIcon.className = "fa fa-angle-down";
  }
});
