function debounce(func, wait) {
  let timer = null;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, wait);
  };
}

let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 3000);

debouncedIncrement();
debouncedIncrement();
debouncedIncrement();
debouncedIncrement();
