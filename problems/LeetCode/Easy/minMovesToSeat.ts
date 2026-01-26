function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let moves = 0;

  for (let i = 0; i < seats.length; i++) {
    moves += Math.abs(seats[i] - students[i]);
  }

  return moves;
}

// Time: O(nlogn)
// Space: O(1)
