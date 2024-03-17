function gradingStudents(grades: number[]): number[] {
  let result: number[] = [];

  for (let ele of grades) {
    if (ele < 38 || ele % 5 < 3) {
      result.push(ele);
      continue;
    }

    const newGrade = ele + (5 - (ele % 5));
    result.push(newGrade);
  }

  return result;
}

console.log(gradingStudents([33, 38, 40, 57, 58, 84]));
