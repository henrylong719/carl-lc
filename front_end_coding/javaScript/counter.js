(() => {
  const $countEl = document.querySelector('#count');
  let count = 0;

  document.querySelector('button').addEventListener('click', () => {
    count++;
    $countEl.innerText = count;
  });
})();
