import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);

  const onIncreaseCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <button onClick={onIncreaseCount}>Clicks: {count}</button>
    </div>
  );
}

export default App;
