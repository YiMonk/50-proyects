const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
  panel.addEventListener("click", () => {
    removeClassActive();
    // addClassActive(panel);
    panel.classList.add('active');
  });
});

function removeClassActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// function addClassActive() {
//   this.classList.add("active");
// }


