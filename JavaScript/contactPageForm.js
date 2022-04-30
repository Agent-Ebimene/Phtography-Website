// Contact Dropdown

// const contactPageBtn = document.getElementById("contact-page-link-two");
// const contactPagePersonsDropdown = document.querySelector(
//   ".contact-page-dropdown"
// );
// const contactDownArrow = document.querySelector(".persons-down-arrow>i");
// const contactCategoryDropdown = document.querySelector(".contact-category");
// const contactPageCategoryBtn = document.querySelector(".contact-page-link-two");
// const contactPageCategoryIcon = document.querySelector(
//   "#contact-page-category-arrow"
// );

// contactPageBtn.addEventListener("click", () => {
//   contactPagePersonsDropdown.classList.toggle("person-visible");
//   if (contactPagePersonsDropdown.classList.contains("person-visible")) {
//     contactDownArrow.className = "fa fa-angle-up";
//   } else {
//     contactDownArrow.className = "fa fa-angle-down";
//   }
// });

// contactPageCategoryBtn.addEventListener("click", () => {
//   contactCategoryDropdown.classList.toggle("category-visible");
//   if (contactCategoryDropdown.classList.contains("category-visible")) {
//     contactPageCategoryIcon.className = "fa fa-angle-up";
//   } else {
//     contactPageCategoryIcon.className = "fa fa-angle-down";
//   }
// });

const contactPageBtn = document.getElementById("contact-page-link-one");

const contactPagePersonsDropdown = document.querySelector(
  ".contact-page-persons-dropdown"
);
const contactDownArrow = document.querySelector(".persons-down-arrow>i");

const contactCategoryDropdown = document.querySelector(".contact-category");
console.log(
  contactPageBtn,
  contactPagePersonsDropdown,
  contactDownArrow,
  contactCategoryDropdown
);
