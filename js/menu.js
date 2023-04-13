const tabButtons = document.querySelectorAll(".nav li");
const tabSections = document.querySelectorAll(".tab-section");

tabButtons.forEach((button,index) => {
    button.addEventListener("mouseenter", function () {
        tabSections[index].style.display = "block";
      });
      button.addEventListener("mouseleave", function () {
        tabSections[index].style.display = "none";
      });
      tabSections[index].addEventListener("mouseenter", function () {
        tabSections[index].style.display = "block";
      });
      tabSections[index].addEventListener("mouseleave", function () {
        tabSections[index].style.display = "none";
      });
})