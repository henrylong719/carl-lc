function timeConversion(s: string): string {
  // AM
  if (isAM(s)) {
    return s.replace('12', '00').slice(0, 8);
  }

  //PM
  // get the hour of the s
  const hour = s.slice(0, 2);

  const updatedHour = parseInt(hour) + 12;

  if (updatedHour !== 24) {
    return updatedHour + s.slice(2, 8);
  }

  return s.slice(0, 8);
}

function isAM(s: string) {
  return s.toUpperCase().includes('A');
}
