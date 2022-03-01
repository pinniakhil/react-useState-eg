import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')

  function decrementCount() {
   setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('red')
  }

  return (
    <><button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={incrementCount}>+</button></>
  );
}

export default App;
/*
Here we are  using 2 different hooks to manage our 2 diff types of state and thats actually 
one of the biggest benifits of the useState hooks is to have multiple different pieces of state all broken out
into and it becomes easier to manage and change.

for example here we can change our theme in incrementCount we can do that by adding 
setTheme('red') to line 13.
*/