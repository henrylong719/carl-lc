const getTodo = (callback) => {
  setTimeout(() => {
    callback({ text: 'Complete Code Example' });
  }, 2000);
};
function display() {
  getTodo((todo) => {
    console.log(todo.text);
  });
}

display();
