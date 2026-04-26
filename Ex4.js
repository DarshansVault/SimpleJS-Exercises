function getGrade(avg) {
  if (avg >= 90) {
    return "A";
  } else if (avg > 79) {
    return "B";
  } else if (avg > 69) {
    return "C";
  } else if (avg > 59) {
    return "D";
  } else {
    return "F";
  }
}
function getAverage(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}
function generateReport(student) {
  const avg = getAverage(student.scores);
  const grade = getGrade(avg);

  return `${student.name} --- Average: ${avg} --- Grade: ${grade} --- High: ${Math.max(...student.scores)} --- Low: ${Math.min(...student.scores)}`;
}

const students = [
  {
    name: "John Doe",
    scores: [85, 92, 78, 88],
  },
  { name: "Jane Doe", scores: [93, 91, 89, 90] },
  {
    name: "Jim Beam",
    scores: [70, 75, 80, 65],
  },
  {
    name: "Jack Sparrow",
    scores: [80, 60, 80, 80],
  },
  {
    name: "Will Turner",
    scores: [40, 90, 70, 90],
  },
];

students.map((student) => {
  console.log(generateReport(student));
});
const result = students.reduce((maxStudent, student) => {
  const max = Math.max(...student.scores);
  const min = Math.min(...student.scores);
  const range = max - min;

  if (!maxStudent || range > maxStudent.range) {
    return { ...student, range };
  }

  return maxStudent;
}, null);
console.log(
  `Student with the highest range: ${result.name} with a range of ${result.range}`,
);
const topStudent = students.reduce((best, s) => {
  const avg = s.scores.reduce((a, b) => a + b, 0) / s.scores.length;
  return !best || avg > best.avg ? { ...s, avg } : best;
}, null);
console.log(
  `Student with the highest average: ${topStudent.name} with an average of ${topStudent.avg}`,
);
