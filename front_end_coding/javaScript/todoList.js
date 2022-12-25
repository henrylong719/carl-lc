import './styles.css';

(() => {
  const inputEle = document.querySelector('#todoInput');
  const ul = document.querySelector('#todos');

  // add todos
  function addTodos(label) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');
    span.innerText = label;
    deleteBtn.innerText = 'Delete';
    li.appendChild(span);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
  }

  // remove todos
  function removeTodos(ele) {
    ele.parentNode.removeChild(ele);
  }

  document.querySelector('#submitBtn').addEventListener('click', function () {
    const inputValue = inputEle.value.trim();
    if (!inputValue) {
      alert('please input a value !');
      return;
    }
    addTodos(inputValue);
    inputEle.value = '';
  });

  ul.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
      removeTodos(event.target.parentNode);
    }
  });
})();
