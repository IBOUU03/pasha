const accordion = document.querySelectorAll(".btn-click");
accordion.forEach(element => {
    element.addEventListener("click", function() {
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
            content.style.display = "none";
    } else {
      accordion.forEach(element => {
        element.nextElementSibling.style.display = "none";
      })
         content.style.display = "block";
    }
  });
});