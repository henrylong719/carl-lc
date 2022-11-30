const sleep = (i: number, ms: number) =>
  new Promise((resolve) => setTimeout(() => resolve(i), ms));

function print() {
  for (let i = 0; i < 10; i++) {
    sleep(i, i * 100).then(() => {
      console.log(i);
    });
  }
}

print();
