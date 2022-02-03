function gradingStudentsUsingMap(grades) {
  return grades.map((grade) => {
    let dif = 5 - (grade % 5);
    if (dif < 3 && grade >= 38) {
      grade += dif;
    }
    return grade;
  });
}

console.log(gradingStudentsUsingMap([74, 84, 71, 39]));
