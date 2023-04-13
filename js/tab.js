const entrepreneurBtn = document.querySelector("#entrepreneur-btn");
const ownerBtn = document.querySelector("#owner-btn");
const entrepreneur = document.querySelector("#entrepreneur");
const owner = document.querySelector("#owner");

entrepreneurBtn.addEventListener("click", function() {
  openTab(entrepreneur);
});

ownerBtn.addEventListener("click", function() {
  openTab(owner);
});

function openTab(tabName) {
  const tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach(element =>{
    element.style.display = "none";
  });

   tabName.style.display = "block";
}