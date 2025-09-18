function bonAppetit(bill: number[], k: number, b: number): void {
  const shareBill =
    bill.filter((val, idx) => idx !== k).reduce((acc, cur) => (acc += cur)) / 2;

  if (b === shareBill) {
    console.log('Bon Appetit');
  } else {
    console.log(b - shareBill);
  }
}
