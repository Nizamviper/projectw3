document.addEventListener("DOMContentLoaded", function () {
  const filter = document.getElementById("cuisineFilter");
  const cards = document.querySelectorAll(".recipe-card");

  filter.addEventListener("change", function () {
    const selected = this.value;

    cards.forEach((card) => {
      if (selected === "all" || card.dataset.cuisine === selected) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });

  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const ingredients = btn.nextElementSibling;
      ingredients.classList.toggle("hidden");
      btn.textContent = ingredients.classList.contains("hidden")
        ? "Show Ingredients"
        : "Hide Ingredients";
    });
  });
});
