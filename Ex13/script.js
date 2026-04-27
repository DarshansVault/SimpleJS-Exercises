function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function pickRandom(arr, seed) {
  const index = Math.floor(seededRandom(seed) * arr.length);
  return arr[index];
}

function displayMeal(meal, category) {
  const ingredients = [];

  for (let i = 1; i <= 3; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`,
      );
    }
  }

  document.getElementById("result").innerHTML = `
    <h2>${meal.strMeal}</h2>
    <p><b>Category:</b> ${category}</p>
    <img src="${meal.strMealThumb}" />
    <h3>Ingredients:</h3>
    <ul>
      ${ingredients.map((i) => `<li>${i}</li>`).join("")}
    </ul>
  `;
}

function runPromise(seed) {
  const status = document.getElementById("status");
  status.innerText = "Finding category...";

  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => res.json())
    .then((data) => {
      const category = pickRandom(data.categories, seed);
      status.innerText = "Finding meal...";

      return fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`,
      )
        .then((res) => res.json())
        .then((mealsData) => {
          const meal = pickRandom(mealsData.meals, seed + 1);
          return { meal, category: category.strCategory };
        });
    })
    .then(({ meal, category }) => {
      status.innerText = "Loading recipe...";

      return fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`,
      )
        .then((res) => res.json())
        .then((fullData) => {
          displayMeal(fullData.meals[0], category);
          status.innerText = "Done!";
        });
    })
    .catch((err) => {
      status.innerText = "Error occurred!";
      console.error(err);
    });
}

async function runAsync(seed) {
  const status = document.getElementById("status");

  try {
    status.innerText = "Finding category...";

    const res1 = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    const data1 = await res1.json();

    const category = pickRandom(data1.categories, seed);

    status.innerText = "Finding meal...";

    const res2 = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`,
    );
    const data2 = await res2.json();

    const meal = pickRandom(data2.meals, seed + 1);

    status.innerText = "Loading recipe...";

    const res3 = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`,
    );
    const data3 = await res3.json();

    displayMeal(data3.meals[0], category.strCategory);

    status.innerText = "Done!";
  } catch (err) {
    status.innerText = "Error occurred!";
    console.error(err);
  }
}

document.getElementById("promiseBtn").onclick = () => runPromise(42);
document.getElementById("asyncBtn").onclick = () => runAsync(42);
