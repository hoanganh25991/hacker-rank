const gradingStudents = (grades) => {
  // Write your code here
  return grades.map(grade => {
    if (grade < 38) {
      return grade;
    }

    const mul = Math.floor(grade / 5) + 1;
    const newGrade = mul * 5;
    const diff = newGrade - grade;

    const shouldRound = diff < 3;
    return shouldRound ? newGrade : grade;
  })

}

const grades01 = [73, 67, 38, 33];
console.log(gradingStudents(grades01))