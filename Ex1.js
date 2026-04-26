function introduce(name, age, city, hobby) {
  var agegroup;
  if (age >= 18) {
    agegroup = "an adult";
  } else if (age > 0) {
    agegroup = "a young person";
  } else {
    return "Not a valid age";
  }
  console.log(
    `My name is ${name}. I am ${agegroup} living in ${city}. My favourite hobby is ${hobby}.`,
  );
}

introduce("Priya", 22, "Bengaluru", "photography");
introduce("Arjun", 16, "Chennai", "gaming");
introduce("Raghav", -9, "Mangalore", "art");
