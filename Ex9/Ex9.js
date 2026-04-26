const starsContainer = document.getElementById("stars");
const label = document.getElementById("rating-label");
const avgDisplay = document.getElementById("average");

const stars = [];
const ratings = [];

let selectedRating = 0;
let hoverRating = 0;

/* Step 1: create stars */
for (let i = 1; i <= 5; i++) {
  const star = document.createElement("span");
  star.textContent = "★";
  star.classList.add("star");

  stars.push(star);
  starsContainer.appendChild(star);

  /* Step 2: mouse events */
  star.addEventListener("mouseover", () => {
    hoverRating = i;
    highlightStars(i);
  });

  star.addEventListener("mouseout", () => {
    highlightStars(selectedRating);
  });

  star.addEventListener("click", () => {
    selectedRating = i;
    ratings.push(i);

    updateLabel(i);
    updateAverage();
  });
}

/* Step 3: highlight function */
function highlightStars(n) {
  stars.forEach((star, index) => {
    if (index < n) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

/* Step 3: rating label */
function getRatingLabel(n) {
  const labels = ["Terrible", "Poor", "OK", "Good", "Excellent"];
  return labels[n - 1] || "";
}

function updateLabel(n) {
  label.textContent = getRatingLabel(n);
}

/* Step 4: average */
function updateAverage() {
  const sum = ratings.reduce((a, b) => a + b, 0);
  const avg = (sum / ratings.length).toFixed(1);
  avgDisplay.textContent = `Average: ${avg}`;
}

/* Step 4: keyboard support */
starsContainer.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    selectedRating = Math.min(5, selectedRating + 1);
    highlightStars(selectedRating);
    updateLabel(selectedRating);
  }

  if (e.key === "ArrowLeft") {
    selectedRating = Math.max(1, selectedRating - 1);
    highlightStars(selectedRating);
    updateLabel(selectedRating);
  }

  if (e.key === "Enter") {
    if (selectedRating > 0) {
      ratings.push(selectedRating);
      updateAverage();
    }
  }
});
