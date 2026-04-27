// 50 items
const items = [
  "India",
  "USA",
  "Japan",
  "Brazil",
  "Germany",
  "France",
  "Italy",
  "Canada",
  "Australia",
  "China",
  "Pizza",
  "Burger",
  "Pasta",
  "Sushi",
  "Tacos",
  "Biryani",
  "Noodles",
  "Salad",
  "Steak",
  "Sandwich",
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "Go",
  "Rust",
  "Kotlin",
  "Swift",
  "Ruby",
  "Spain",
  "Mexico",
  "Korea",
  "Thailand",
  "Vietnam",
  "Turkey",
  "Egypt",
  "Norway",
  "Sweden",
  "Finland",
  "Ice Cream",
  "Cake",
  "Chocolate",
  "Donut",
  "Pancake",
  "Waffle",
  "Soup",
  "Fries",
  "Dumplings",
  "Curry",
];

const list = document.getElementById("list");
const search = document.getElementById("search");
const count = document.getElementById("count");

function render(data, query = "") {
  list.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");

    if (query) {
      const regex = new RegExp(`(${query})`, "gi");
      li.innerHTML = item.replace(regex, "<mark>$1</mark>");
    } else {
      li.textContent = item;
    }

    list.appendChild(li);
  });

  count.textContent = `Showing ${data.length} of 50`;
}

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function filterList() {
  console.log("FILTER RUN");

  const query = search.value.toLowerCase();

  const filtered = items.filter((item) => item.toLowerCase().includes(query));

  render(filtered, search.value);
}

const debouncedFilter = debounce(filterList, 300);

search.addEventListener("input", debouncedFilter);

render(items);
