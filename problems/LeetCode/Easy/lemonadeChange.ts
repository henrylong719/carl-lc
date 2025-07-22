function lemonadeChange(bills: number[]): boolean {
  let fiveNote = 0;
  let tenNote = 0;

  const handleTwentyNote = () => {
    if (tenNote > 0) {
      tenNote--;
      fiveNote--;
    } else {
      fiveNote = fiveNote - 3;
    }
  };

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      fiveNote++;
      continue;
    }

    if (bills[i] === 10) {
      tenNote++;
      fiveNote--;
    }

    if (bills[i] === 20) {
      handleTwentyNote();
    }

    if (fiveNote < 0) {
      return false;
    }
  }

  return true;
}
