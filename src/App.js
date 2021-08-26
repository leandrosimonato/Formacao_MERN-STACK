import React, { useState, useEffect } from 'react';



function App() {

  // Declare uma nova variável de state, a qual chamaremos de "count"

  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`
  }, [count])
  

  return (
    <div>
      <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click aqui!
        </button>
    </div>
  );
}

export default App