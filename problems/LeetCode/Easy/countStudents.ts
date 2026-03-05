function countStudents(students: number[], sandwiches: number[]): number {
  const count = [0, 0];

  for (let s of students) {
    count[s]++;
  }

  for (let i = 0; i < sandwiches.length; i++) {
    const type = sandwiches[i];

    if (count[type] === 0) {
      return sandwiches.length - i;
    }

    count[type]--;
  }

  return 0;
}

// Time: O(n)
// Space: O(1)
